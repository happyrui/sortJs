/**
 * Created by dell-pc on 2017/4/13.
 */
/*将待排序的序列构造成一个最大堆，此时序列的最大值为根节点;依次将根节点与待排序序列的最后一个元素交换
再维护从根节点到该元素的前一个节点为最大堆，如此往复，最终得到一个递增序列*/
function heapSort(array){
        //建堆
        var heapSize=array.length,temp;
        for(var i=Math.floor(heapSize/2)-1;i>=0;i--){
            heapify(array,i,heapSize);
        }
        //堆排序
        for(var j=heapSize-1;j>=1;j--){
            temp=array[0];
            array[0]=array[j];
            array[j]=temp;
            heapify(array,0,--heapSize);
        }
        return array;
}
function heapify(arr,x,len){
        var l=2*x+1,r=2*x+2,largest=x,temp;
        if(l<len&&arr[l]>arr[largest]){
            largest=l;
        }
        if(r<len&&arr[r]>arr[largest]){
            largest=r;
        }
        if(largest!=x){
            temp=arr[x];
            arr[x]=arr[largest];
            arr[largest]=temp;
            heapify(arr,largest,len);
        }
}
var arr=[1,3,6,8,5,3,5];
console.log(heapSort(arr));