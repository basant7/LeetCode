var isPalindrome = function(x) {
    if(x<0){
        return false;
    }

    var temp = x;
    var result = 0;
    while(x>0){
        var a = x%10;
        result=(result*10)+a;
        x=Math.floor(x/10);
    }
    if(temp == result){
        return true;
    }else{
        return false;
    }
};

console.log(isPalindrome(11221))
console.log(isPalindrome(77799777))
