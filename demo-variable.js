//Khai báo hàm
function square(input) { //input : tham số - biến của hàm
    //Viết các câu lệnh vào đây
    // console.log(input);
    return input * input;
    // return;
    //return trả về 1 giá trị: number,int,float,long,double, string,char, boolean, null, undefine;
    //return : Thoát khỏi hàm;
}

//Sử dụng hàm
// input = 5;
// function_name(5) - 5: Đối số - giá trị thực của input khi sử dụng hàm
// console.log(square(5));
// document.write(square(5));
// alert(square(5));

// let sum = square(5) + square(3); // let sum = 25 + 9;
// console.log(sum);


//Có 2 loại hàm
//Hàm thực thi - Hàm số học
//Hàm không có return - Hàm return;

//Tham chiếu - Tham trị
//*
// Tham chiếu là chiếu vị trí của ô nhớ và có thể thay đổi được giá trị của ô nhớ
// Là tham chiếu khi là mảng hoặc object;
// Tham trị là chỉ lấy giá trị của ô nhớ và không thể thay đổi giá trị ô nhớ
// Là tham trị khi là dữ liệu nguyên thủy;
// */


let a = 5;
let b = [5];
function doubleValue(number) {
    number[0] = 10;
}
doubleValue(a); //number = a;
doubleValue(b); //number = b;

console.log(b);



