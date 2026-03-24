let count = 0;
// HTML -> JS 
// const resultH1 = document.querySelectorAll('h1')[0];
// const resultH1 = document.querySelector('h1');
const resultH1 = document.getElementById('result'); 
// const resultH1 = document.querySelector('#result');
// const resultH1 = resultH1;
const plusButton = document.getElementsByClassName("plusBtn")[0];

// plusButton.addEventListener('click', () => {
//     // 숫자 증가 
// count++; //count += 1; // count = count + 1;

//     // 숫자 표시 
// resultH1.innerText = count; 
// });
function plus(){
    // 숫자 증가
    
plusButton.onclick = () => { 
    // 숫자 증가 
count++; //count += 1; // count = count + 1;

// 숫자 표시 
resultH1.innerText = count; 
};

    
}

// (함수정의)();
// (function a(){
    
// })()