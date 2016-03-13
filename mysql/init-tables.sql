create database hackmaster;
use hackmaster;

create table posts(
    id int not null auto_increment,
    title varchar(64) not null,
    post text not null,
    tags varchar(64) not null,
    year int(4),
    month int(2),
    primary key (id)
);
