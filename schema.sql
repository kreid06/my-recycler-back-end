create table users(
    id serial PRIMARY KEY,
    email VARCHAR(20) unique,
    password VARCHAR NOT NULL
)