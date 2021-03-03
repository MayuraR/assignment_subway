//enter the following in the terminal
//node createBucket.js <bucket name>
//bucket names should be unique and should not contain uper case letters


// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region
AWS.config.update({region: 'us-east-1'});

// Create S3 service object
s3 = new AWS.S3;

// Create the parameters for calling createBucket
var bucketParams = {
    Bucket : process.argv[2]
};

// call S3 to create the bucket
s3.createBucket(bucketParams).promise()
    .then((data) =>{
            console.log("Success", data);
        })
    .catch((err) =>{
        console.log(err)
    });