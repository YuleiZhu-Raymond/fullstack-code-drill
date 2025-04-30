
function createCounter(n) {
    let count = 0;
    return function() {
        count += 1;
        return count;;
    };
}

module.exports = createCounter;