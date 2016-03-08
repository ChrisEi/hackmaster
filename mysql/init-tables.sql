create database hackmaster;
use hackmaster;

create table posts(
    id int not null auto_increment,
    title varchar(64) not null,
    post text,
    tagOne varchar(20),
    tagTwo varchar(20),
    tagThree varchar(20),
    tagFour varchar(20),
    tagFive varchar(20),
    tagSix varchar(20),
    year int(4),
    month int(2),
    primary key (id)
);
