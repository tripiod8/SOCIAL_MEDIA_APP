CREATE TABLE users(
    Id uuid PRIMARY KEY DEFAULT UUID_GENERATE_V4(),
    UserName VARCHAR(30) NOT NULL,
    Avatar VARCHAR(30) NOT NULL
);