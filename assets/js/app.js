const input_khoiluong = document.getElementById("input_value");
const list = document.getElementById("list");
const test = document.getElementById("test");
let temp_input = document.getElementById("temp_input");
let soKg = document.getElementById("soKg");
let count = 0;
let arr = [];
let arr_tong = [];
let arr_temp = [];
let sum_item = 0;
let tongSoKg = 0;
function App() {
    let node = arr.map(function (data, index) {
        console.log(index);
        return `
        <ul class="col-3 mb-5">
        ${data.map(function (item) {
            return `
                <li>${item}</li> 
            `
        }).join('')}
            <li class="sum">${arr_tong[index]}</li>
        </ul>
        `
    });
    list.innerHTML = node.join('');
}

function Add() {
    let khoiLuong = input_khoiluong.value;
    // Check null empty input
    if (khoiLuong == null || khoiLuong == "") {
        alert("Ban chua nhap");
        return false;
    }
    input_khoiluong.focus();
    // add value and count++
    arr_temp.push(khoiLuong);
    count++;
    hoanThanh(khoiLuong);
    // Show temp input
    let temp_node = arr_temp.map(function (data) {
        return `<p> ${data}</p>`;
    })
    temp_input.innerHTML = temp_node.join('');
    // Reset input and focus
    input_khoiluong.value = '';
    input_khoiluong.focus();
    // Sum item
    sum_item += parseInt(khoiLuong);
    // Show table when 5 item
    if (count == 5) {
        arr.push(arr_temp);
        arr_tong.push(sum_item);
        // reset value
        sum_item = 0;
        count = 0;
        arr_temp = [];
        App();
    }
}
function hoanThanh(value) {
    tongSoKg += parseInt(value);
    soKg.innerHTML = tongSoKg;
    console.log(123);
}