// 타입 별칭

// let user: {
//   id: number;
//   name: string;
//   nickname: string;
//   birth: string;
//   bio: string;
//   location: string;
// } = {
//   id: 1,
//   name: "이종석",
//   nickname: "js",
//   birth: "1993.02.02",
//   bio: "hi",
//   location: "서울",
// };

// 지정해야할 타입이 많거나 중복 코드를 줄이기위해 별칭을 사용
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "이종석",
  nickname: "js",
  birth: "1993.02.02",
  bio: "hi",
  location: "서울",
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

// 인덱스 시그니처 주의사항 - 타입 지정 후 객체의 값이 아무것도 없어도 오류가 발생안함

type CountryNumberCodes = {
  [key: string]: number;
};

let countryNumberCodes: CountryNumberCodes = {};
