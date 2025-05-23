// 대수 타입
// -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입(합집합 타입과 교집합 타입 존재)

// 1. 합집합 타입 - Union 타입
let a: string | number | boolean;
a = 1;
a = "hi";
a = true;

let arr: (number | string | boolean)[] = [1, "hi", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

let union4: Union1 = { // name만 있는 객체는 오류가 남 -> name은 Dog 또는 Person 어디에도 속하지 않음
  name: "", // color 또는 language가 없기 때문
};

// 2. 교집합 타입 - Intersection 타입 -> 주로 객체 타입에 많이 쓰임(대부분 교집합이 없어서 공집합이 되기 때문)
let variable: number & string;

type Intersection = Dog & Person;

let intersection1: Intersection = { // 교집합 조건을 만족해야해서 키값이 하나라도 없으면 오류가 남
  name: "",
  color: "",
  language: "",
};
