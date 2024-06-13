const repeatString = function(string, numOfRepeat) {
    if ((numOfRepeat < 0)) return "ERROR";

    let output = '';
    for (let i = 0; i < numOfRepeat; i++) {
        output += string;
    }
    return output;

};

// Do not edit below this line
module.exports = repeatString;
