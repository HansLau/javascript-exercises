const sumAll = function(from, to) {
    // if (!from ?? !to ?? false) return "ERROR";
    if (from < 0 || to < 0 || (typeof from !== 'number') || (typeof to !== 'number')) return "ERROR";

    if (from > to){
        const temp = from;
        from = to;
        to = temp;
        // from, to = to, from;
    }

    let sum;
    for (sum = 0; from <= to; from++){
        sum += from;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
