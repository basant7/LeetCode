var reverse = function(x) {
    // if x is zero reutrn zero
    if (x === 0) { return 0; }
    
    // for negative and positive numbers
    let sign = 1;
    if(x < 0) { 
        sign = -1; 
        x *= -1;
    }

    var result = 0;
    while(x>0){
        // if x = 123 then a will be 12
        var a= Math.floor(x / 10);
        //  if x = 123 then b will be 3
        var b = x-a*10
        x = a;
        // reversively store the number in result
        result = result*10 +b;
    }
    // add sign with result
    result = result * sign;
    
    // if result is greater than 2^31 then it should return zero
    if (result < -1*(2 ** 31) || result > 2 ** 31 - 1) {
        return 0;
    }
    
    return result;
}

// test cases
console.log(reverse(123));
console.log(reverse(-794));
console.log(reverse(834857623847658723));