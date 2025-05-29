// 함수 오버로딩 - 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 정의하는 방법

// 오버로드 시그니처(다양한 버전으로 정의하는 부분)
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 구현 시그니처(실제 구현부분)
function func(a: number, b?: number, c?: number) { // 매개변수를 3개 넣으면 매개변수 1개의 오버로드 시그니처 오류 발생
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b+ c);
  } else {
    console.log(a * 20);
  }
}

// 오버로드 시그니처(매개변수 개수)에 맞게 오류 판단
func():
func(1);
func(1, 2):
func(1, 2, 3);

export {};
