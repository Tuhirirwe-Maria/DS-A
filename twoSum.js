// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

let twoSum = function(nums, target) {
    for(let fIndex=0;fIndex<nums.length;fIndex++){
        for(let sIndex = fIndex+1;sIndex<nums.length;sIndex++){
            if(nums[fIndex]+nums[sIndex] == target){
                return [fIndex,sIndex]
            }
        }
    }
};
console.log(twoSum([15, 7, 11, 2],9))
