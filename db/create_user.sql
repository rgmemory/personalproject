insert into users
(id, firstname, username)
values
($1, $2, $3)
returning *;