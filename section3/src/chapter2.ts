// 객체 타입간의 호환성
// -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "멍멍이",
  color: "brown",
  breed: "진도",
};

animal = dog;

// dog = animal; 반대로 하면 오류가 남
// 객체에도 슈퍼, 서브 타입 관계가 존재, Animal과 같이 키값이 더 적은 객체가 슈퍼타입이 됨

// 초과 프로퍼티 검사
let animal2: Animal = {
  name: "멍멍이",
  color: "brown",
  // breed: "진도", dog가 animal에 할당했지만 Animal에 정의된 타입만 검사하기때문에 오류가 남
};
