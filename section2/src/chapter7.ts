// void - 아무것도 없음을 의미하는 타입
function func1(): string {
  return "hello";
};

function func2(): void { // return값이 없으니 void 사용
  console.log("hello");
};

let a: void;
a = 1;
a = "hi";
a = {};
a = undefined; // undefined만 할당 가능

// never - 불가능한 타입
function func3(): never { // 무한 루프 함수
  while (true) {}
};

// void와 달리 undefined도 할당 불가
// never에는 그 어떤 값도 저장 불가
