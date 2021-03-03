//Scan a table

// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-east-1'});

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB;

var params = {
  TableName: 'sampleTable'
};

// Call DynamoDB to read item from the table
ddb.scan(params).promise()
.then(data => {
    console.log("Success", data)
    data.Items.forEach(function (element, index, array) {
        console.log(element);
      });
})
.catch((err)=>{
    console.log("Error", err);
  });