//map dùng để ánh xạ các phần tử trong mảng thành theo 1 hàm tuỳ chỉnh
//Duyệt cả mảng

const arr = ['java', 'python', 'c++', 'javascript'];
const arr_mapped = arr.map((item) =>  `learn ${item}`);
console.log(arr_mapped.toString());


//some dùng để kiểm tra xem có tồn tại phần tử thoả mãn điều kiện truyền vào
//Duyệt đến khi gặp phần tử thoả mãn

var isExist = arr.some(item => item == 'jav');
console.log(isExist);


//find dùng để tìm thấy phần tử đầu tiên thoả điều kiện
//Duyệt đến khi tìm thấy
var found = arr.find(item => item == 'java');
console.log(found);


//filter lọc các phần tử theo điều kiện cho trước
//Duyệt cả mảng
var filtered = arr.filter(item =>  /^j/.test(item) );
console.log(filtered);

//reduce dùng để thực thi 1 hàm lên từng phần tử với 1 biến tích luỹ
//Duyệt cả mảng
var reduced=arr.reduce((result,item)=> `${result} ${item}`,'learning  ')
console.log(reduced);


//includes kiểm tra phần tử tốn tại trong mảng bắt đầu từ index cho trước
//Duyệt đến khi thoả trả về true 
var result1=arr.includes('java',0);
var result2=arr.includes('java',2);
console.log(result1,result2);

//indexOf giống như includes nhưng trả vè index của phần tử tìm thấy
//Dừng lại khi tìm thấy phần tử thoả mãn
var result3=arr.indexOf('java');
var result4=arr.indexOf('java',2);
console.log(result3,result4);