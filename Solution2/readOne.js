// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-east-1'});

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB;

var params = {
  TableName: 'sampleTable',
  Key: {
    email:{
      //edit the line below. email is the key
      S: "rajadhyaksha.mayura@gmail.com"        //S stands for string(AttributeValue representation)
    }
  }
};

// Call DynamoDB to read the item from the table
ddb.getItem(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Item);
  }
});