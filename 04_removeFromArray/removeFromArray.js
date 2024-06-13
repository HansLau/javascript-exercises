const removeFromArray = function(arr, ...rest) {
    // rest.forEach(unwanted => {
    //     let foundIndex = arr.indexOf(unwanted);
    //     if (foundIndex > -1) arr.splice(foundIndex, 1); 
    // });
    // return arr;

    let newArr;
    newArr = arr.filter( element =>  (!rest.includes(element)));
    return newArr;

    // rest.forEach(unwanted => {
    //     if (arr.indexAt(unwanted) > -1) newArr.push(unwanted);
    // }) 
    
    //2 for loops, returns new array


    //1. array.filter() does it immutable, slightly slower
    //2. indexAt() might be nicer than double for loops
};

// Do not edit below this line
module.exports = removeFromArray;
