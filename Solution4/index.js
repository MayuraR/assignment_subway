let sumFunction = function (a, b) {
    let s = a+b

    console.log(typeof(s))

    if(typeof(s) != 'number'){
        return('Enter numbers')
    }
    else
    {      
        return(s)
    }
}

console.log(sumFunction('0',0))

module.exports.s = sumFunction

