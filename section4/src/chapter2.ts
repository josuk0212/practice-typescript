// 함수 타입 표현식
// 매개변수의 개수와 타입의 개수는 맞춰주기
type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;

// 호출 시그니처(콜 시그니처)
type Operation2 = {
  (a: number, b: number) : number;
  // name: string; 타입 추가 가능(하이브리드 타입)
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;

export {};
