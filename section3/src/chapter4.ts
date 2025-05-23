// 타입 추론 - 초기화 시 알아서 타입을 지정함(변수의 초기값을 기준으로 함)
let a = 10;
let b = "hello";
let [one, two, three] = [1, "hello", true];

function func(message = "hi") {
  return "hi"; // 함수는 반환값 기준으로 추론
};

let arr = [1, "hi"]; // union타입으로 추론

// 초기값이 없는 케이스
let d; // 암묵적으로 any타입으로 추론
d = 10; // 숫자를 넣으면 number타입으로 추론
d = "hi"; // 문자열을 넣으면 string타입으로 추론

// const 케이스
const num = 10; // 어차피 상수여서 리터럴 타입으로 추론
const str = "hi";
