
function useState(initialValue) {
    let value = initialValue;

    function get() {
        return value;
    }

    function set(newValue) {
        value = newValue;
        console.log("State updated to:", value);
    }

    return [get, set];
}

module.exports = useState;