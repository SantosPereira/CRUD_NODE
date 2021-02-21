require('marko/node-require');
var markoExpress = require("marko/express")
const express = require('express')

const AlunoDao = require('./dao/aluno-dao')
const dao = new AlunoDao

const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(markoExpress());
app.use(bodyParser.urlencoded())

app.get('/', (req, res) => {
    dao.list().then((results) => {
        res.marko(require('./templates/alunos.marko'), results);
    }).catch((err) => {
        console.log('OCORREU UM ERRO')
        console.log(err)
        res.marko(require('./templates/alunos.marko'), []);
    })

    
})

app.get('/form', function (req, res){
    res.marko(require('./templates/form.marko'))
})

app.get('/form/:id', function (req, res){
    let aluno = dao.findById(req.params.id).then((result) => {
        if (result.length > 0){
            aluno = result[0]
            res.marko(require('./templates/form.marko'), aluno)
        }else{
            res.redirect('/')
        }
    }).catch((err) => {
        res.redirect('/')
    });
})

app.get('/alunos/delete/:id', function (req, res){
    dao.delete(req.params.id).then((result) => {
        res.redirect('/')
    }).catch((err) => {
        console.log(err)
        res.redirect('/')
    })
})

app.post('/alunos', function (req, res){
    if(req.body.id){
        dao.update(req.body).then((result) => {
            res.redirect('/')
        }).catch((err) => {
            console.log(err)
            res.redirect('/')
        })
    }
    else{
        dao.save(req.body).then((result) => {
            res.redirect('/')
        }).catch((err) => {
            console.log(err)
            res.redirect('/')
        })
    }
})

app.listen(port, '0.0.0.0', () => {
    console.log('Servidor iniciado...')
})