var express = require("express");
var http = require('http');
var mongoose = require('mongoose');    
var _ = require("underscore");

//===========================CONFIGURATION==========================
// Start express application
var app = express();

// all environments - configuration
app.configure(function(){
    app.set('port', process.env.PORT || 3000);
    app.use(express.errorHandler());
    app.use(express.methodOverride());
    app.use(express.bodyParser());
    app.use(express.static(__dirname + '/app'));
    app.use(express.errorHandler());
    app.use(app.router);
});

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

app.get("/", function(req, res) {
    res.redirect("/index.html");
});

//==================================================================
//===========================MONGO DB===============================
var db = mongoose.connection;

db.on('error', console.error);

db.once('open', function() {            
    // Schema
    var userSchema = new mongoose.Schema({        
        name: { type: String },
        lastname:  { type: String }
    });
    // Mongoose also creates a MongoDB collection called 'users' for these documents.
    var users = mongoose.model('singleUser', userSchema);
    
    //===========================EXAMPLES===============================
    
    var user_example1 = new users({        
        name: 'Ezequiel',
        lastname:  'Peralta'
    });
    var user_example2 = new users({        
        name: 'Negro',
        lastname:  'Cardoso'
    });
    var user_example3 = new users({        
        name: 'Juan',
        lastname:  'Asas'
    });
    
    user_example1.save();
    user_example2.save();
    user_example3.save();    
    //==================================================================
    
    //===========================METHODS================================    
    // get all users
    app.get('/api/allUsers', function(req, res){
        users.find(function(err, allUsers) {
            if (err) return console.error(err);
            res.send (allUsers);
        });
    });
    
    // create a new user
    app.put('/newUser', function(req, res) {        
        var newUser = new users({            
            name : req.body.name,
            lastname : req.body.lastname
        });
        newUser.save();
        res.json(true);
    });
    //==================================================================        
});
//==================================================================

mongoose.connect('mongodb://localhost/test');