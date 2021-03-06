CREATE TABLE logs (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    content TEXT NOT NULL,
    mood TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT now(),
    user_id INTEGER
        REFERENCES users(id) ON DELETE CASCADE NOT NULL
);