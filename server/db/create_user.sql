INSERT INTO users
    (email, password)
VALUES
    (${email}, ${hashedPassword})
RETURNING *;