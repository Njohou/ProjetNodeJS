var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var session = require('express-session');
upload = require('express-fileupload');
app=express();
app.use(upload()); 
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/** connection à la base de données **/
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'techweb'
});

/******************************afficher la page avec le localhost à la page SALES.ejs, login.ejs et register.ejs**********************************/

app.get('/login', function(req, res){
    res.render('login.ejs');
});


app.get('/loginerror', function(req, res){
    res.render('login-error.ejs');
});


app.get('/register',function(req,res){
    res.render('register.ejs');
});

app.get('/sales',function(req,res){
    res.render('SALES.ejs');
});

 app.get('/transfer',function(req,res){
     res.render('form-inscrip.ejs');
 });

app.get('/home', function(req,res){
    res.render('Home.ejs');
});

app.get('/rent', function(req,res){
    res.render('rent.ejs');
});

app.get('/contacts', function(req,res){
    res.render('pageContact.ejs');
});


app.get('*',function(req,res){
    res.send('<br><br><br><br><h1><center style= " margin : 0px auto; "> 404 Page Not Found</center></h1>');
       res.end();
});

/********************************************************************************/


app.post('/creer', function(req, res){
    console.log("début de l'enregistrement de l'utilisateur");
    let name = req.body.name;
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;


    if(name && username && email && password)
   { //vérification de l'existence de l'user dans la bd

    console.log("verification des donnees");

    var sql = `SELECT * FROM utilisateur  WHERE (username = '${username}')`;
    connection.query(sql, function (err, result) {
        if (err) {
            var r = "une erreur s'est produite pendant l'enregistrement";
            res.render('register.ejs', {error: r});
        }
        if(result.length>0)
        {              
            var r = 'le user existe déja dans la bd';
            res.render('register.ejs', {error: r});

        }else {
            console.log("pas de compte deja existant");
                var sql = `INSERT INTO utilisateur (name,username,mail,password) VALUES ('${name}', '${username}', '${email}', '${password}')`;
                connection.query(sql, function (err, result) {
                    if (err) {
                        var message = 'erreur pendant insertion';
                        res.render('SALES.ejs', {error: message});
                    }
                    console.log("utilisateur inserer");
                    res.redirect("/home");
                  
                });
        }
});
   }else {

    var message = 'tous les champs doivent etre remplis';
    res.render('login.ejs', {error: message});    
}
})


/** Au cas où un utilisateur est déjà connecté, il peut se logger avec la fonction suivant **/

app.post('/login', function(req,res){
/** recuperer le login et le password de la page login.ejs **/
    let username1 = req.body.username;
    let password1 = req.body.password;

    if(username1 && password1) 
        {
            /** comparer les données entrées aux données de la BD **/
            var sql = `SELECT * FROM utilisateur WHERE (username = '${username1}' AND password = '${password1}')`;
            connection.query(sql, function(err,results,fields){
                if(results.length>0){
                    req.session.loggedin = true;
                    req.session.username1 = username1;
                    res.redirect('/home');
                }else{
                    //res.send('username ou password incorrect');
                    res.redirect('/loginerror');
                }
                res.end();
            });

        }
});


/** ****************************************************************/


// app.post('/transfer', function(req, res){
//     var file = req.files.image,
//      local = req.body.localisation,
//      nompro = req.body.nomproprio, 
//     imagename = file.name,
//     imageurl = './public/image/'+imagename;
//     var sql = "INSERT INTO transferer(localisation,nomproprio,nomimage,localimage) VALUES (?, ?, ?, ?)";
//     connection.query(sql, [local, nompro, imagename, imageurl], function (err, result) {
//       if (err) throw err;
//       console.log("1 file inserted");
//     });
//     file.mv('./public/image/'+imagename, function(err){
//       if(err) throw err;
//       res.redirect('/sales');
//     });
//   });



app.get('/sales', function(req,res){
    var sql = "SELECT localisation,nomproprio,nomimage,localimage FROM transferer";
    //let fileimg = [];
    //console.log(files);
    connection.query(sql, function(err,results,fields){
        if(err) throw err;
        res.render('SALES.ejs');
    });
});




/** ****************************************************************/
/** le port d'écoute et le message qui s'affiche dans la console, quand on se connecte **/
app.listen(3000,()=>{
    console.log('server running correctly') 
 });