/**
 * @param {Function[]} functions
 * @return {Function}
 */
//First thing I want to do is access each function in the functions array
//this means I need a for loop to pass through each function inside the array
//what I really want is for each function (starting from right to left) to be evaluated and then the result become the parameter for the next function
//I need to see if I can iterate through the array backwards because that might be easier

var compose = function(functions) {
    return function(x) {
        for (let i = functions.length - 1; i >=0; i--) {
             x = functions[i](x)
        }
        return x
    }
};


//here is where we call the function and pass our argument as an array of functions
const fn = compose([x => x + 1, x => 2 * x])
//here is where we define x as an argument of fn
 console.log(fn(6)) // 9
