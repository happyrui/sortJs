/**
 * Created by dell-pc on 2017/4/13.
 */
//根据待排序列元素的大小范围，均匀独立的划分M个桶
//将N个输入元素分布到各个桶中去
//再对各个桶中的元素进行排序
//此时再按次序把各桶中的元素列出来即是已排序好的。
function bucketSort(array,num){
    if(array.length<=1){
        return array;
    }
    var len=array.length,buckets=[],result=[],min=max=array[0],regex='/^[1-9]+[0-9]*$/',space,n=0;
    num=num||((num>1&&regex.test(num))?num:10);
    for(var i=1;i<len;i++){
        min=min<=array[i]?min:array[i];
        max=max>=array[i]?max:array[i];
    }
    space=(max-min+1)/num;
    for(var j=0;j<len;j++){
        var index=Math.floor((array[j]-min)/space);
        if(buckets[index]){  //  非空桶，插入排序
            var k=buckets[index].length-1;
            while(k>=0&&buckets[index][k]>array[j]){
                buckets[index][k+1]=buckets[index][k];
                k--;
            }
            buckets[index][k+1]=array[j];
        }else{    //空桶，初始化
            buckets[index]=[];
            buckets[index].push(array[j]);
        }
    }
    while(n<num){
        result=result.concat(buckets[n]);
        n++;
    }
    return result;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(bucketSort(arr,4));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]