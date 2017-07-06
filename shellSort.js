/*先取一个小于n的整数d1作为第一个增量，把文件的全部记录分组。所有距离为d1的倍数的记录放在同一个组中。
先在各组内进行直接插入排序；然后，取第二个增量d2<d1重复上述的分组和排序，直至所取的增量
=1(<…<d2<d1)，即所有记录放在同一组中进行直接插入排序为止*/
function shellSort(arr) {
	var len = arr.length,
		temp,
		gap = 1;
	while(gap < len/5) {          //动态定义间隔序列
		gap =gap*5+1;
	}
	for (gap; gap > 0; gap = Math.floor(gap/5)) {
		for (var i = gap; i < len; i++) {
			temp = arr[i];
			for (var j = i-gap; j >= 0 && arr[j] > temp; j-=gap) {
				arr[j+gap] = arr[j];
			}
			arr[j+gap] = temp;
		}
	}
	return arr;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(shellSort(arr));