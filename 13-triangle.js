// 13. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

let minimist = require("minimist");

let input = minimist(process.argv)

let triangle = () => {
    console.log( 0.5 * input.a * input.b);
};

triangle()
