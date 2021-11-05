/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
const timeout = setTimeout(() => {
  console.log('1.5초 후 실행')
}, 1500)

const interval = setInterval(() => {
  console.log('1초 마다 실행')
}, 1000)

const timeout2 = setTimeout(() => {
  console.log('실행되지 않습니다')
}, 3000)

setTimeout(() => {
  clearTimeout(timeout2)
  clearInterval(interval)
}, 6000)

const immediate = setImmediate(() => {
  // eslint-disable-next-line no-console
  console.log('즉시 실행')
})

const immediate2 = setImmediate(() => {
  console.log('실행되지 않았습니다')
})

clearImmediate(immediate2)
