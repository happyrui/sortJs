/*先确定一个“支点”（pivot），将所有小于“支点”的值都放在该点的左侧，
大于“支点”的值都放在该点的右侧，然后对左右两侧不断重复这个过程，直到所有排序完成*/
/*function qSort(list){
	if(list.length==0){
		return [];
	}
	var lesser=[];
	var greater=[];
	var pivot=list[0];
	for(var i=1;i<list.length;i++){
		if(list[i]<pivot){
			lesser.push(list[i]);
		}else{
			greater.push(list[i]);
		}
	}
	return qSort(lesser).concat(pivot,qSort(greater));
}*/
function qSort(arr){
	if(arr.length==0){
		return [];
	}
	var left=[];
	var right=[];
	var pivot=arr[0];
	for(var i=1;i<arr.length;i++){
		if(arr[i]<pivot){
			left.push(arr[i]);
		}else{
			right.push(arr[i]);
		}
	}
	return qSort(left).concat(pivot,qSort(right));
}
var arr=[1,3,6,8,5,3,5];
console.log(qSort(arr));