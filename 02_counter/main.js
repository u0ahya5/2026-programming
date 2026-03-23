// ctrl + shift + K 한 줄 지우기 단축키
let count = 0;
// HTML -> JS
// const resultH1 = document.getElementsByTagName("h1")[0]; // elements는 여러 요소를 가져오는 것이기에 뒤에 [0](첫번째 값) 같은 인덱스가 붙는다
const resultH1 = document.getElementById("result"); // id로 속성 가져오기 (보다 빠름)
// const resultH1 = document.querySelector("#result"); // css selector로 가져오기
// const plusButton = document.getElementsByTagName("button")[0];

// button 누르면 숫자 증가
// function 지우고 화살표로도 가능
// plusButton.addEventListener("click", () => {
//     count++; // count += 1; // count = count + 1;
//     resultH1.innerHTML = count;
// }); // 만약 처리함수()라고 적어둔다면 클릭할 때 처리함수를 실행할 리턴값(undefind)이 들어가서
                                            // 숫자가 증가를 못한다 언디파인드가 실행된다
                                            // 어떤 함수를 실행 할지만 적혀 있어야 한다

// plusButton.onclick = () => {
//     count++; // count += 1; // count = count + 1;
//     resultH1.innerHTML = count;
// };

// 증가한 숫자 화면에 표시하자
// function 처리함수(){
//     count++; // count += 1; // count = count + 1;
//     resultH1.innerHTML = count;
// }

// 익명 함수로도 처리 가능
// plusButton.addEventListener("click", function(){
//     count++; // count += 1; // count = count + 1;
//     resultH1.innerHTML = count;
// });

function plus(number = 1){
    count+=number;
    resultH1.innerHTML = count;
}
// const plus = (number = 1) => {
//     count+=number;
//     resultH1.innerHTML = count;
// }
// function plus2(){
//     count+=2;
//     resultH1.innerHTML = count;
// }
// function minus(){
//     count--;
//     resultH1.innerHTML = count;
// }