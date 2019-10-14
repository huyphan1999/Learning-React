
function add{
	const arr=['C#','C++','python'];
	var result=[];
	for (var i = 0; i < arr.length; i++) {
		result[i]='learning '+arr[i];
	}
	return result;
}
console.log(add.toString())