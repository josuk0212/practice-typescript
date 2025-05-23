// 타입 단언
type Person = {
  name: string;
  age: number;
}

let person = {} as Person;
person.name = "이종석";
person.age = 33;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "멍멍이",
  color: "brown",
  breed: "진도",
} as Dog;

// 타입 단언 규칙 - 값 as 단언
// A as B라고 가정할 때, A가 B의 슈퍼타입이거나 서브타입이어야 함
let num1 = 10 as never;
let num2 = 10 as unknown;

let num3 = 10 as string; // 같은 계층이여서 오류 발생

// const 단언(객체타입과 활용할 때 유용) - readOnly로 변경됨
let num4 = 10 as const;

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;

// Non Null 단언 - null/undefined가 아니라고 단언하는 것
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "이종석",
};

const len: number = post.author!.length;
