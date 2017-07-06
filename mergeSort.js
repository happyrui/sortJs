/*将两个已经排序的数组合并，要比从头开始排序所有元素来得快。因此，可以将数组拆开，
分成n个只有一个元素的数组，然后不断地两两合并，直到全部排序完成*/
/*function mergeSort(items) {
    if (items.length < 2) {
        return items;
    }
    var middle = Math.floor(items.length / 2),
        left = items.slice(0, middle),
        right = items.slice(middle),
        params = merge(mergeSort(left), mergeSort(right));
    params.unshift(0, items.length);
    items.splice.apply(items, params);
    return items;
    function merge(left, right) {
        var result = [],
            il = 0,
            ir = 0;
        while (il < left.length && ir < right.length) {
            if (left[il] < right[ir]) {
                result.push(left[il++]);
            } else {
                result.push(right[ir++]);
            }
        }
        return result.concat(left.slice(il)) .concat(right.slice(ir));
    }
}*/

function mergeSort(arr){  //采用自上而下的递归方法
    var len=arr.length;
    if(len<2){
        return arr;
    }
    var middle=Math.floor(len/2),
        left=arr.slice(0,middle),
        right=arr.slice(middle);
    return merge(mergeSort(left),mergeSort(right));
}
function merge(left,right)
{
    var result=[];
    while(left.length&&right.length){
        if(left[0]<=right[0]){
            result.push(left.shift());
        }else{
            result.push(right.shift());
        }
    }
    while(left.length)
        result.push(left.shift());
    while(right.length)
        result.push(right.shift());
    return result;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(mergeSort(arr));
