insert into users
(authentication, firstname)
values
($1, $2)
returning *;