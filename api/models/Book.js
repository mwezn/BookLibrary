const db = require('../dbConfig/init');

const Author = require('./Author');

module.exports = class Book {
    constructor(data, author){
        this.id = data.id;
        this.title = data.title;
        this.yearOfPublication = data.year_of_publication;
        this.abstract = data.abstract;
        this.author = { name: data.author_name, path: `/authors/${data.author_id}`};
    };

    static get all(){
        return new Promise (async (resolve, reject) => {
            try {
                let bookData = await db.query('SELECT id, title, author_id FROM books;');
                let books = bookData.rows.map(b => new Book(b));
                resolve (books);
            } catch (err) {
                reject('Book not found');
            }
        });
    };

    
  
   static findById(id){
        return new Promise (async (resolve, reject) => {
            try { //We dont need any inner join here! Just a simple select by id
                let bookData = await db.query(`SELECT * FROM books WHERE id= $1`, [ id ]); 
                let book = new Book(bookData.rows[0]);
                resolve (book);
            } catch (err) {
                reject('Book not found');
            }
        });
    }

    /*static findById(id){
        return new Promise (async (resolve, reject) => {
            try { //Think this is the correct inner join to use since we want to match tables based on authorid?
                let bookData = await db.query(`SELECT books.title, books.year_of_publication, books.abstract,
                                                    authors.id
                                                    FROM books 
                                                    INNER JOIN authors
                                                    ON books.author_id = $1;`, [ id ]);
                let book = new Book(bookData.rows[0]);
                resolve (book);
            } catch (err) {
                reject('Book not found');
            }
        });
    };*/

    
    static async create(bookData){
        return new Promise (async (resolve, reject) => {
            try { //REALLY CONFUSED BY THIS :/
                const { title, yearOfPublication, abstract, authorName} = bookData;
                console.log(bookData)
                let author = await Author.findOrCreateByName(authorName);
                let result = await db.query(`INSERT INTO books 
                                                    (title, year_of_publication, abstract, author_id) 
                                                    VALUES ($1, $2, $3, $4) 
                                                    RETURNING id`, [ title, yearOfPublication, abstract, author.id ]);
                console.log(author,author.rows[0])
                console.log(result)//undefined?
                resolve (result);//not result.rows[0]?
            } catch (err) {
                reject('Book could not be created');
            }
        });
    };

    destroy(id){
        return new Promise(async(resolve, reject) => {
            try {
                const result = await db.query('DROP FROM books WHERE id = $1 RETURNING author_id', [ id ]); 
                const author = await Author.findById(result.rows[0].author_id);
                const books = await author.books;
                if(!books.length){await author.destroy()}
                resolve('Book was deleted')
            } catch (err) {
                reject('Book could not be deleted')
            }
        })
    };
};