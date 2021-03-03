var AWS = require('aws-sdk');

AWS.config.update({region: 'us-east-1'})

var ssm = new AWS.SSM();
    
const ssmParams = ssm.getParameters({
    Names: ['/test']
}).promise();

ssmParams.then((data) =>{
    console.log(data)
})
.catch((err) =>{
    console.log(err)
})