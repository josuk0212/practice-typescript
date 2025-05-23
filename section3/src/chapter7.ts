// 서로소 유니온 타입 - 교집합이 없는 타입들로만 만든 유니온 타입
// tag를 넣어줄 시, 교집합이 없는 서로소로 바뀜
type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> name님 현재까지 kickCount명 강퇴했습니다.
// Member -> name님 현재까지 point모았습니다.
// Guest -> name님 현재까지 visitCount번 오셨습니다.

// 아래 처럼 작성 시, 다른 사람이 이 코드를 볼 때, 각 조건이 ADMIN인지 GUEST인지 명확하게 알기 어려움
function login1(user: User) {
  if ("kickCount" in user) {
    // admin타입
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  } else if ("point" in user) {
    // member타입
    console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
  } else if ("ivsitCount" in user) {
    // guest타입
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
  }
};

// tag활용
function login2(user: User) {
  if (user.tag === "ADMIN") {
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  } else if (user.tag === "MEMBER") {
    console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
  } else if (user.tag === "GUEST") {
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
  }
};

// 좋은 사용 예시 - 비동기 작업의 결과를 처리하는 객체
type LoadingTask = {
  state: "LOADING",
};

type FailedTask = {
  state: "FAILED",
  error: {
    message: "오류입니다.",
  },
};

type SuccessTask = {
  state: "SUCCESS",
  response: {
    data: "데이터",
  },
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

function processResult(task: AsyncTask) {
  switch(task.state) {
    case "LOADING": {
      console.log("로딩 중");
      break;
    }
    case "FAILED": {
      console.log(`에러 발생: ${task.error.message}`);
      break;
    }
    case "SUCCESS": {
      console.log(`성공: ${task.response.data}`);
      break;
    }
  }
};
