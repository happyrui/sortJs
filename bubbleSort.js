/*依次比较相邻的两个数，如果不符合排序规则，则调换两个数的位置。这样一遍比较下来，能够保证最大（或最小）的数排在最后一位。
再对最后一位以外的数组，重复前面的过程，直至全部排序完成*/
/*function bubbleSort(arr){
	var len = arr.length;
	for(var i = 0;i<len;i++){
		for(var j = 0;j<len-1-i;j++){
			if(arr[j]>arr[j+1]){  //相邻元素两两比较
				var temp = arr[j+1];  //元素交换
				arr[j+1] = arr[j];
				arr[j]=temp;
			}
		}
	}
	return arr;
}

var mynums = [1,4,6,2,6,8,3,1,4,9];
console.log(bubbleSort(mynums));*/

function bubbleSort2(arr){
	console.time('改进后冒泡排序耗时');
	var i=arr.length-1;  //初始时,最后位置保持不变
	while(i>0){
		var pos=0;//每趟开始时,无记录交换
		for(var j=0;j<i;j++){
			if(arr[j]>arr[j+1]){
				pos=j;//记录交换的位置
				var tmp=arr[j];
				arr[j]=arr[j+1];
				arr[j+1]=tmp;
			}
		}
		i=pos;//为下一趟排序作准备
	}
	console.timeEnd('改进后冒泡排序耗时');
	return arr;
}
var arr=[3,44,38,5];
console.log(bubbleSort2(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]

/*
function bubbleSort3(arr3) {
	var low = 0;
	var high= arr.length-1; //设置变量的初始值
	var tmp,j;
	console.time('2.改进后冒泡排序耗时');
	while (low < high) {
		for (j= low; j< high; ++j) //正向冒泡,找到最大者
			if (arr[j]> arr[j+1]) {
				tmp = arr[j]; arr[j]=arr[j+1];arr[j+1]=tmp;
			}
		--high;                 //修改high值, 前移一位
		for (j=high; j>low; --j) //反向冒泡,找到最小者
			if (arr[j]<arr[j-1]) {
				tmp = arr[j]; arr[j]=arr[j-1];arr[j-1]=tmp;
			}
		++low;                  //修改low值,后移一位
	}
	console.timeEnd('2.改进后冒泡排序耗时');
	return arr3;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(bubbleSort3(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]*/
