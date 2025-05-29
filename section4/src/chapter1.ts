// 함수 타입 정의
// 어떤 타입의 매개변수를 받고, 어떤 타입의 결과값을 반환하는가
function func(a: number, b: number) : number {
  return a + b;
}

// 화살표 함수 타입 정의
const add = (a: number, b: number) : number => a + b;

// 함수의 매개변수
function introduce(name = "이종석", tall: number) {
  console.log(`name : ${name}`);
  console.log(`tall : ${tall}`);
}

introduce("이종석", 177);

function getSum(...rest : number[]) {
  let sum = 0;
  rest.forEach(element => {
    sum += element
  });

  return sum;
}

getSum(1, 2, 3); // 6
