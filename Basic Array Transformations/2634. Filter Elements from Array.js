/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    ans = new Array();
    for(let i=0;i<arr.length;i++){
        var chk = fn(arr[i],i);
        if(chk)
            ans.push(arr[i]);
    }
    return ans;
};