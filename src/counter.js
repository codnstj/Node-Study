/* eslint-disable no-use-before-define */
/* eslint-disable no-var */
function getCounter() {
  var result = {
    // eslint-disable-next-line no-use-before-define
    // eslint-disable-next-line object-shorthand
    count: count,
    total: 0,
  }
  // eslint-disable-next-line no-unused-vars
  function count() {
    result.total += 1
  }
  return result
}

const counter = getCounter()
counter.count()
counter.count()
console.log(counter.total)
