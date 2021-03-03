//require all the needed packages
var express = require('express');
var cors = require('cors')

app = express();
app.use(express.json())
app.use(cors());

let sum = 0

//Get the sum
app.get('/sum', (req, res) =>{
    res.send(`${sum}`)
})


//add two numbers
//http://localhost:3000/sum?num1=2&&num2=1
app.post('/sum', (req, res,) =>{
    const a = new Number(req.query.num1)
    const b = new Number(req.query.num2)
    sum = (a+b)
    if(Number.isNaN(sum)){
        console.log(typeof(sum))
        res.send('Enter numbers')
    }
    else
    {    
        console.log(typeof(sum))    
        res.send(`The sum is ${sum}`)
    }
})

// const server = app.listen(3000, () => {
//     console.log('Listening to port 3000')
// })

module.exports = app;