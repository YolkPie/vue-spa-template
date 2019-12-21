const arr = [
  {
    '感冒': 44.24045394448309
  },
  {
    '扁桃体周围脓肿': 0.0008733615505636072
  },
  {
    '流行性感冒': 15.44459478089799
  },
  {
    '慢性鼻窦炎': 3.859523014479244
  }
]
const res = arr.reduce((prev, cur) => prev.concat(Object.keys(cur)), [])
console.log(res)
