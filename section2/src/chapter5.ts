// enum 타입(열거형 타입) - 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
enum Role {
  ADMIN = 0, // 숫자를 별도로 작성안해도 위에서 부터 자동으로 0번 부여(10이라고 되어 있으면 자동으로 +1씩 추가)
  USER = 1,
  GUEST = 2,
};

enum Language {
  korean = "ko",
  english = "en",
};

const user1 = {
  name: "이종석",
  role: Role.ADMIN, // before role: 0
  Language: Language.korean,
};

const user2 = {
  name: "김무개",
  role: Role.USER, // before role: 1
  Language: Language.english,
};

const user3 = {
  name: "최무개",
  role: Role.GUEST, // before role: 2
};

// enum은 컴파일해도 사라지지 않는다.
