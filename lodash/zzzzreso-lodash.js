var zzzzreso = {
  chunk(arr, size = 1) {
    let res = []
    let i = 0
    while (i < arr.length) {
      let j = 0
      let newArr = []
      while (j < size && i < arr.length) {
        newArr.push(arr[i])
        i++
        j++
      }
      res.push(newArr)
    }
    return res
  },
  compact(arr) {
    let res = []
    for (const item of arr) {
      if (item) {
        res.push(item)
      }
    }
    return res
  },
  concat(array, ...values) {
    let res = [...array]
    for (const item of values) {
      if (this.isArray(item)) {
        res.push(...item)
      } else {
        res.push(item)
      }
    }
    return res
  },
  difference(array, ...values) {
    let res = []
    if (!this.isArray(array)) return res
    for (let item of array) {
      if (!values.includes(item)) {
        res.push(item)
      }
    }
    return res
  },
  differenceBy(array, values, iteratee) {

  },
  //迭代器处理
  baseIteratee(value){
    if(typeof value === 'function') {
      return value
    }
    if(value == null) {
      
    }
  },
  isArray(value) {
    return Object.prototype.toString.call(value) === '[object Array]'
  },
  isArrayLike(value) {},
  isArrayLikeObject(value) {
    return this.isObjectLike(value) && this.isArrayLike(value)
  },
  isObjectLike(value) {
    return value !== null && typeof value === 'object'
  },
  isNaN(val) {
    if (val !== val) {
      return true
    } else {
      return false
    }
  },
}
