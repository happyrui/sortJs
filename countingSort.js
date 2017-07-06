/**
 * Created by dell-pc on 2017/4/13.
 */
//先把每个元素的出现次数算出来，然后算出该元素所在最终排好序列中的绝对位置(最终位置)，
// 再依次把初始序列中的元素，根据该元素所在最终的绝对位置移到排序数组中。
function countingSort(array) {
    var len = array.length,
        B = [],
        C = [],
        min = max = array[0];
    for (var i = 0; i < len; i++) {
        min = min <= array[i] ? min : array[i];
        max = max >= array[i] ? max : array[i];
        C[array[i]] = C[array[i]] ? C[array[i]] + 1 : 1;
    }
    for (var j = min; j < max; j++) {
        C[j + 1] = (C[j + 1] || 0) + (C[j] || 0);
    }
    for (var k = len - 1; k >= 0; k--) {
        B[C[array[k]] - 1] = array[k];
        C[array[k]]--;
    }
    return B;
}
var arr=[23,45,21,12,1,3,54,653,2,4,65];
console.log(countingSort(arr));