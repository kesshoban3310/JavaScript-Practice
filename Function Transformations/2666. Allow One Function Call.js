/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    var ans = 0;
    var vis = 0;
    return function(...args){
        if(!vis){
            vis = 1;
            ans = fn(...args);
            return ans;
        }
        else return undefined;
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */