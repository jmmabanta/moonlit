CREATE TABLE stocks (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    ticker character varying(10) NOT NULL,
    name character varying(128) NOT NULL,
    price numeric(20,2) DEFAULT 0.00 NOT NULL,
    change numeric(20,2) DEFAULT 0.00 NOT NULL
);

CREATE TABLE users (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    google_id text,
    name text,
    email text,
    picture text,
    portfolio text[] DEFAULT '{}'::text[] NOT NULL
);
