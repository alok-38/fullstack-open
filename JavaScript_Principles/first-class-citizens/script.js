const greet = function () {
    console.log("Hello!");
};
greet();

// Passed as arguments to other functions
function callFunction(fn) {
    fn();
}

callFunction(greet);