// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "im", "jongsuk"];

// 제네릭 방식
let boolArr: Array<boolean> = [true, false, true];

// 배열 요소의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플(ts에서만 제공) - 길이와 타입이 고정된 배열
// 튜플 사용 시, push, pop 사용해도 별도의 오류가 안뜨니 사용 주의
let tup1: [number, number] = [1, 2];
// tup1 = [1, 2, 3]; 길이가 다를경우 오류가 남

let tup2: [number, string, boolean] = [1, "2", true]; // 순서가 바뀌어도 안됨

// 튜플을 유용하게 사용하는 방법
const users: [string, number][] = [
  ["이", 1],
  ["김", 2],
  ["최", 3],
  ["박", 4],
  // [5, "금"], 순서가 바뀌는 것을 방지
];
