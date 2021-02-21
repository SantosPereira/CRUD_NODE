create database crud_node;

use crud_node;

create table alunos (
    id int auto_increment primary key,
    nome varchar(100),
    email varchar(100),
    curso varchar(200)
);

select * from alunos;

insert into alunos (nome, email, curso) values ('José Luiz', 'jose@gmail.com', 'Tec em Informatica para Internet');
insert into alunos (nome, email, curso) values ('Maria Jose', 'maria@gmail.com', 'Tec em Informatica para Internet');
insert into alunos (nome, email, curso) values ('Luiza', 'luiza@gmail.com', 'Tec em Qualidade');