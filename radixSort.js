/**
 * Created by dell-pc on 2017/4/13.
 */
/** 基数排序适用于：
*  (1)数据范围较小，建议在小于1000
*  (2)每个数值都要大于等于0*/
function radixSort(arr,maxDigit){
    var mod=10;
    var dev=1;
    var counter=[];
    for(var i=0;i<maxDigit;i++,dev*=10,mod*=10){
        for(var j=0;j<arr.length;j++){
            var bucket=parseInt((arr[j]%mod)/dev);
            if(counter[bucket]==null){
                counter[bucket]=[];
            }
            counter[bucket].push(arr[j]);
        }
        var pos=0;
        for(var j=0;j<counter.length;j++){
            var value=null;
            if(counter[j]!=null){
                while((value=counter[j].shift())!=null){
                    arr[pos++]=value;
                }
            }
        }
    }
    return arr;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(radixSort(arr,2));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
