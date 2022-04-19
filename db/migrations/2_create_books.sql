DROP TABLE IF EXISTS books;



CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR NOT NULL,
    year_of_publication VARCHAR,
    abstract VARCHAR NOT NULL,
    author_id int
);