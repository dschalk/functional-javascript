var sum = function(xs) {
    if(xs.length === 0) return 0;
    return first(xs) + sum(rest(xs));
}

var sum = function(list) {
    function go(acc, xs) {
        if(xs.length === 0) return acc;
        return go(acc+first(xs), rest(xs));
    return go(0, list)
    }
}

console.log(sum([1,2,3,4])([],[1,2,3,4,5,6]))
