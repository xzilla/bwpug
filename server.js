
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(require('stylus').middleware({ src: __dirname + '/public' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

// original app.get('/', routes.index);

app.get('/', function(req, res){
    res.render('index', { 
        title: 'Home'
    });
});

app.get('/about', function(req, res){
    res.render('about', {
        title: 'About'
    });
});

app.get('/schedule', function(req, res){
    res.render('schedule', {
        title: 'Schedule'
    });
});

app.get('/venue', function(req, res){
    res.render('venue', {
        title: 'Venue'
    });
});

app.get('/register', function(req, res){
    res.render('register', {
        title: 'Register'
    });
});

app.get('/sponsor', function(req, res){
    res.render('sponsor', {
        title: 'Sponsor'
    });
});

app.get('/contact', function(req, res){
    res.render('contact', {
        title: 'Contact'
    });
});

app.listen(14300);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
