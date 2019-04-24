CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    title varchar(50),
    website_url TEXT,
    description varchar(500),
    size varchar(50)
)