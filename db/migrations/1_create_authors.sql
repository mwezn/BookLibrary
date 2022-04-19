DROP TABLE IF EXISTS authors;

CREATE TABLE authors (
    id serial PRIMARY KEY UNIQUE,
    name varchar(100) NOT NULL
);
