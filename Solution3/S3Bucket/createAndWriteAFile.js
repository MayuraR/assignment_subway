//Create and write to a file
//enter the following in the terminal
//node createAndWriteAFile.js <file_name> <bucket_name>

// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-east-1'});

var fs = require('fs');

var path = require('path');

// Create S3 service object
s3 = new AWS.S3;

entry = '';

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB;

var params = {
  TableName: 'sampleTable'
};

//filename 
var file = process.argv[2];

//bucket name
var bucket = process.argv[3]

//Upload parameters for the bucket
var uploadParams = {Bucket: bucket , Key: '', Body: ''};

getAllValues()

// Call DynamoDB to read item from the table

//async function
async function getAllValues(){
  const d = await ddb.scan(params).promise()
  .then(data => {
      console.log("Success", data)
      data.Items.forEach((element) => {
          console.log(element);
          entry= entry+' '+JSON.stringify(element)+','
        });
        fs.writeFile(file, entry, function (err) {
          if (err) throw err;
          console.log('Saved!');
        });
        uploadParams.Key = path.basename(file);

        //upload to s3
        s3.upload (uploadParams, function (err, data) {
            if (err) {
              console.log("Error", err);
            } if (data) {
              console.log("Upload Success", data);
            }
          })

  })
  .catch((err)=>{
      console.log("Error", err);
    });
}

