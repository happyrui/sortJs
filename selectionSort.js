/*选择排序（Selection Sort）与冒泡排序类似，也是依次对相邻的数进行两两比较。不同之处在于，它不是每比较一次就调换位置，
而是一轮比较完毕，找到最大值（或最小值）之后，将其放在正确的位置，其他数的位置不变*/
function selectionSort(arr){
	var len=arr.length;
	var minIndex,temp;
	for(var i=0;i<len-1;i++){
		minIndex=i;
		for(var j=i+1;j<len;j++){
			if(arr[j]<arr[minIndex]){    //寻找最小的数
				minIndex=j;                //将最小数的索引保存
			}
		}
		temp=arr[i];
		arr[i]=arr[minIndex];
		arr[minIndex]=temp;
	}
	return arr;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(selectionSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]