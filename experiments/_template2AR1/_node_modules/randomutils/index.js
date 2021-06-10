// index.js

var random = function(a, b) {
    if(b === undefined) {
        b = 0;
    }
    return a + Math.random() * (b - a);
}


var randomFloor = function(a, b) {
    return Math.floor(random(a, b));
}


var randomGaussian = function(n) {
    if( n === undefined) n = 6;
    var rand = 0;
  
    for (var i = 0; i < n; i += 1) {
        rand += Math.random();
    }
  
    return rand / n
}

var getRandomElement = function(ary) {
    return ary[randomFloor(ary.length)];
}


var map = function(v, a, b, c, d) {
    let p = (v - a) / ( b - a);
    return c + (d - c) * p;
}


var randomUtils = {
    random,
    randomFloor,
    randomGaussian,
    map,
    getRandomElement
}


module.exports = randomUtils;