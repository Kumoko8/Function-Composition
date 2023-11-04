/**
 * @param {Function[]} functions
 * @return {Function}
 */
//First thing I want to do is access each function in the functions array
//this means I need a for loop to pass through each function inside the array
//what I really want is for each function (starting from right to left) to be evaluated and then the result become the parameter for the next function
//I need to see if I can iterate through the array backwards because that might be easier
//you have to set i to functions.length -1 because the indexes begin at 0 not 1, so an array of two values will be 0, 1 not 1, 2 so even though the length is 2, the last index is 1
//if we are moving backwards through the loop we want decrement instead of increment and we want to do this as long as the index is greater than or equal to 0 not less than the functions.length so basically we reverse all of the standard conditions for a loop swapping the starting value and condition

var compose = function(functions) {
    return function(x) {
        for (let i = functions.length - 1; i >=0; i--) {
             x = functions[i](x)
        }
        //here we are defining x as the parameter of each function in the loop, so if x was 4, the first function gets passed x and now x becomes 8, then the loop goes to the next function, 8 gets passed in and becomes 9
        return x
        //we return the final result of x
    }
};


//here is where we call the function and pass our argument as an array of functions
const fn = compose([x => x + 1, x => 2 * x])
//here is where we define x as an argument of fn
 console.log(fn(6)) // 9
