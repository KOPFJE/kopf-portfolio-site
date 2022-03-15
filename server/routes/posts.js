const express = require("express");
const dbname = process.env.DBNAME;

const postRoutes = express.Router();
const dbo = require('../db/conn');

const ObjectId = require('mongodb').ObjectId;

postRoutes.route("/posts").get(
    function (reg, res) {
        let db_connect = dbo.getDb(dbname);
        db_connect.collection("portfolioposts").find({}).toArray(
            function (err, result) {
                if (err) throw err;
                res.json(result);
            }
        );
    }
);

postRoutes.route("/posts/:id").get(
    function(reg, res) {
        let db_connect = dbo.getDb(dbname);
        let myQuery = { _id: ObjectId( req.params.id )};
        
        db_connect.collection("portfolioposts").findOne(myQuery, 
            function(err, result) {
                if (err) throw err;
                res.json(result);
            }
        );
    }
);

postRoutes.route("/posts/add").post(
    function(req, res) {
        let db_connect = dbo.getDb(dbname);
        let myPost = {
            title : req.body.title,
            teamsize : req.body.teamsize,
            languages : req.body.languages,
            stack : req.body.stack,
            imgpath : req.body.imagepath,
            mdtext : req.body.mdtext
        }
        
        db_connect.collection("portfolioposts").insertOne(myPost,
            function(err, result) {
                if (err) throw err;
                res.json(result);
            }    
        );
    }
);


module.exports = postRoutes;