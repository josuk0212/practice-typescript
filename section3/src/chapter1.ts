// Unknown 타입

function UnknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  // let unknownVar: unknown;
  // let num: number = unknownVar; 다운캐스팅 불가
};

// Never 타입 - 모든 타입의 서브 타입(공집합 같은 느낌)
function neverExam() {
  function neverFunc(): never {
    while (true) {};
  }

  let num: number = neverFunc();
  let str: string = neverFunc();

  // let never1: never = 10; 그 어떤 값도 할당 불가
  // let never2: never = "string"
};

// void 타입
function voidExam() {
  function voidFunc(): void {
    console.log("hi");
  }

  let voidVar: void = undefined;
};

// any타입
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar; // any가 unknown의 서브 타입이지만 다운 캐스팅 가능
  undefinedVar = anyVar; // any가 부모여도 다운 캐스팅 가능

  // neverVar = anyVar; never는 공집함이여서 예외적으로 이 케이스만 할당 불가
};
