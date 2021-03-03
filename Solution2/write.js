//Write an entry

//node write.js <email> in the terminal

// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-east-1'});

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB;

var params = {
  TableName: 'sampleTable',
  Item: {
    'email' : {S: process.argv[2]},
    'address' : {S: 'mumbai'}
  }
};

// Call DynamoDB to add the item to the table
ddb.putItem(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success");
  }
});