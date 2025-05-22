// any - 특정 변수의 타입을 확실히 모를 때 사용(사용 지양)
let anyVar: any = 10; // 어떤 타입이든 다 할당 가능

anyVar = "hello";
anyVar = true;
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase();

let num: number = 10;
num = anyVar;

// unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// any와 다르게 다른곳에 할당 불가
num = unknownVar;
unknownVar.toUpperCase();
