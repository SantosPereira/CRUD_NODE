const mysql = require('mysql2');

class AlunoDao {
    constructor(){
        this._connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '647138',
        database: 'crud_node'
        });
 
        this._alunos = [
            {id: 1, nome: 'Pedro', email:'contato@hotmail.com', curso: 'ADS'},
            {id: 2, nome: 'João', email:'i_meio@hotmail.com', curso: 'ipi'},
            {id: 3, nome: 'Mario', email:'exemplo@hotmail.com', curso: 'ADS'},
            {id: 4, nome: 'Jonas', email:'hotmail@hotmail.com', curso: 'qualidade'}
        ]
    }
    
    list(){
        // return this._alunos;

        // Falta a integração com banco de dados
        
        return new Promise((resolve, reject)=>{
            this._connection.query(
                'SELECT * FROM alunos',
                function(err, results) {
                    if(err){
                        reject(err)
                    }
                    else{
                        resolve(results)
                    }
                }
              );
        })
    }
    save(aluno){
        /*aluno.id = this._alunos.length+1
        this._alunos.push(aluno);*/
        return new Promise((resolve, reject)=>{
            this._connection.query(
                'insert into alunos (nome, email, curso) values (?,?,?)', [aluno.nome, aluno.email, aluno.curso],
                function(err, results) {
                    if(err){
                        reject(err)
                    }
                    else{
                        resolve(results)
                    }
                }
              );
        })
    }

    update(aluno){
        /*this.delete(aluno.id)
        this._alunos.push(aluno);*/
        return new Promise((resolve, reject)=>{
            this._connection.query(
                'update alunos set nome=?, email=?, curso=? where id=?', [aluno.nome, aluno.email, aluno.curso, aluno.id],
                function(err, results) {
                    if(err){
                        reject(err)
                    }
                    else{
                        resolve(results)
                    }
                }
              );
        })
    }

    findById(id){
        return new Promise((resolve, reject)=>{
            this._connection.query(
                'SELECT * FROM alunos where id=?', [id],
                function(err, results) {
                    if(err){
                        reject(err)
                    }
                    else{
                        resolve(results)
                    }
                }
              );
        })
        /*for( let aluno of this._alunos){
            if (aluno.id == id)
            return aluno;
        }
        return null;*/
    }
    delete(id){
        /*this._alunos = this._alunos.filter(function(aluno) {
            return aluno.id != id;
        })*/
        return new Promise((resolve, reject)=>{
            this._connection.query(
                'delete from alunos where id=?', [id],
                function(err, results) {
                    if(err){
                        reject(err)
                    }
                    else{
                        resolve(results)
                    }
                }
              );
        })
    }
}

module.exports = AlunoDao