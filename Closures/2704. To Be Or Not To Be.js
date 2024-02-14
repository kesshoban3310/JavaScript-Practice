/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    function to_Be(val2){
        if(val === val2) return true;
        else throw new Error("Not Equal");
    }
    function not_to_Be(val2){
        if(val !== val2) return true;
        else throw new Error("Equal");
    }
    return{
        toBe: to_Be,
        notToBe: not_to_Be
    };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */