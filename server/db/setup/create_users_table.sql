CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT,
    profile_pic TEXT,
    first_name TEXT,
    last_name TEXT,
    email TEXT,
    job_title TEXT,
    company TEXT,
    is_vendor BOOLEAN
)