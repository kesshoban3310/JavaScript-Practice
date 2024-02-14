/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    var x = init;
    function inc(){
        x+=1;
        return x;
    }
    function re(){
        x = init;
        return x;
    }
    function de(){
        x-=1;
        return x;
    }
    return{
        increment: inc,
        reset: re,
        decrement:de
    };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */