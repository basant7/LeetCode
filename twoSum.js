var twoSum = function(nums, target) {
    var arr = [];
    for(var i = 0; i <nums.length; i++){
        var j = i+1;
        while(j<nums.length){
            // check for the sum of value that is equal to the target
            if(nums[i] + nums[j]==target){
                // push their index in an array
                arr.push(i);
                arr.push(j);
            }
            j++;
        }
    }
    return arr
};

var array = [2,3,6,8];
var t = 9;
console.log(twoSum(array,t));