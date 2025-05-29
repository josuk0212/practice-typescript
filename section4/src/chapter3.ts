// 함수 타입 호환성
// 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단
// 1. 반환값의 타입이 호환되는가? 2. 매개변수의 타입이 호환되는가?

// 반환값의 호환
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
b = a; // 다운캐스팅으로 인한 오류

// 매개변수의 호환(업캐스팅 불가, 다운캐스팅 가능)
// 1. 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

c = d; // 업캐스팅인데도 불구하고 오류가 남
d = c;

// 이유는?
type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

animalFunc = dogFunc;
dogFunc = animalFunc;

// animalFunc가 슈퍼타입인데도 불구하고 업캐스팅 불가

let testFunc = (animal: Animal) => {
  console.log(animal.name);
  console.log(animal.color); // Animal 타입에 color가 없어서 오류, 그래서 업캐스팅 불가
}

// 2. 매개변수의 개수가 다를 때(할당하는 함수의 매개변수가 더 적을때만 가능)
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
func2 = func1; // 할당 받는 쪽의 매개변수가 더 적어 오류
