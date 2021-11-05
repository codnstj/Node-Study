/* eslint-disabled */
const string = 'abc'
const number = 1
const boolean = true

console.time('전체시간')
console.log('평범한 로그입니다 쉼표로 구분해 여러 값을 찍을 수 있습니다')
console.log(string, number, boolean)
console.error('에러 메세지는 console.error에 담아주세요')
// eslint-disable-next-line node/no-unsupported-features/node-builtins
console.table([
  { name: '박지성', birth: 1981 },
  { name: '손흥민', birth: 1992 },
])

console.time('시간측정')
for (let i = 0; i < 100000; i++) {}
console.timeEnd('시간측정')

function b() {
  console.trace('에러 위치 추적')
}

b()

console.timeEnd('전체시간')
