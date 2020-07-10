
'use strict';

var DataSource = require('loopback-datasource-juggler').DataSource;
var DB2 = require('loopback-connector-db2');

var config = {
    connector: "db2",
    username: "db2inst1",
    password: "password",
    hostname: "localhost",
    port: 50000,
    database: 'testdb',
};

var db = new DataSource(DB2, config);

var User = db.define('Person', {
    name: {
        type: String
    }, 
    email: {
        type: String
    }, 
    content: {
        type: Object,
        db2: {
            columnName: "content",
            dataType: "BLOB"
        },
    }
});

db.autoupdate('Person', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  User.create({
    name: 'John',
    email: 'John@email.com',
    content: `
<?xml version="1.0" encoding="UTF-8"?>
<person>
    <name>John</name>
    <email>john@email.com</email>
</person>
    `
  }, function(err, user) {
    console.log(err, user);
  });

  User.find({where: {name: 'John'}}, function(err, users) {
    console.log(err, users);
  });

});