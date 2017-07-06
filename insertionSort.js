/*它将数组分成“已排序”和“未排序”两部分，一开始的时候，“已排序”的部分只有一个元素，
然后将它后面一个元素从“未排序”部分插入“已排序”部分，
从而“已排序”部分增加一个元素，“未排序”部分减少一个元素。以此类推，完成全部排序*/
/*function insertionSort(array) {
	if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
		for (var i = 1; i < array.length; i++) {
			var key = array[i];
			var j = i - 1;
			while (j >= 0 && array[j] > key) {
				array[j + 1] = array[j];
				j--;
			}
			array[j + 1] = key;
		}
		return array;
	} else {
		return 'array is not an Array!';
	}
}*/
function insertionSort(array) {
	for (var i = 1; i < array.length; i++) {
		var key = array[i];
		var j = i - 1;
		while (j >= 0 && array[j] > key) {
			array[j + 1] = array[j];
			j--;
		}
		array[j + 1] = key;
	}
	return array;
}

function binaryInsertionSort(array){
		for(var i=1;i<array.length;i++){
			var key=array[i],left=0,right=i-1;
			while(left<=right){
				var middle=parseInt((left+right)/2);
				if(key<array[middle]){
					right=middle-1;
				}else{
					left=middle+1;
				}
			}
			for(var j=i-1;j>=left;j--){
				array[j+1]=array[j];
			}
			array[left]=key;
		}
		return array;
}
var arr=[12,435,3,2,5,43,2345,6,45];
console.log(insertionSort(arr));
console.log(binaryInsertionSort(arr));