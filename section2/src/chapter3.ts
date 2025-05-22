// object
let user1: object = {
  id: 1,
  name: "이종석",
};

user1.id; // object로 지정 시, 객체 요소의 값을 읽을 수 없음

// 객체 리터럴 타입(이 방법을 주로 사용)
let user2: {
  id?: number; // ?를 추가하면 이 값은 있어도 되고, 없어도 된다는 뜻
  name: string;
} = {
  id: 1,
  name: "이종석",
};

user2 = {
  name: "아무개",
}

user2.id;

let dog: {
  name: string;
  color: string;
} = {
  name: "멍멍이",
  color: "brown",
};

// 읽기전용으로 하는 방법(값 변경 X)
let config: {
  readonly apiKey: string;
} = {
  apiKey: "My APIKEY"
}

config.apiKey = "other key";
