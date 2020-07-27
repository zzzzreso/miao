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
    if (!array || !this.isArray(array) || !array.length) {
      return []
    }
    let res = []
    values = this.flatten(values)
    for (let item of array) {
      if (!values.includes(item)) {
        res.push(item)
      }
    }
    return res
  },
  differenceBy(array, ...values) {
    if (!array || !this.isArray(array) || !array.length) {
      return []
    }
    if (!values.length) {
      return array.slice()
    }
    let iteratee = values[values.length - 1]
    let res = []
    if (typeof iteratee === 'object') {
      return this.difference(array, ...values)
    } else if (typeof iteratee === 'string') {
      var key = iteratee
      iteratee = (val) => val[key]
    }
    values = this.flatten(values.slice(0, -1)).map((it) => iteratee(it))
    for (let item of array) {
      if (!values.includes(iteratee(item))) {
        res.push(item)
      }
    }
    return res
  },
  differenceWith(array, values, comparator) {
    let result = []
    if (!comparator || typeof comparator !== 'function') return array.slice()
  },
  drop(array, n = 1) {
    if (!array || !Array.isArray(array) || !array.length) return []
    n = n < 0 ? 0 : parseInt(n)
    return array.slice(n)
  },
  dropRight(array, n = 1) {
    if (!array || !Array.isArray(array) || !array.length) return []
    n = n < 0 ? 0 : n > array.length ? array.length : parseInt(n)
    return array.slice(0, array.length - n)
  },
  dropRightWhile(array, predicate) {
    if (!array || !Array.isArray(array) || !array.length) return []
    if (typeof predicate !== 'function') return array.slice()
    let result = []
  },
  fill(array, value, start = 0, end = array.length) {
    if (!array || !Array.isArray(array) || !array.length) return []
    for (let i = start; i < end; i++) {
      array[i] = value
    }
    return array
  },
  findIndex(array) {},
  flatten(array) {
    return zzzzreso.flattenDepth(array)
  },
  flattenDeep(array) {
    if (!Array.isArray(array) || !array.length) {
      return []
    }
    let result = []
    for (let item of array) {
      if (Array.isArray(item)) {
        result = result.concat(zzzzreso.flattenDeep(item))
      } else {
        result.push(item)
      }
    }
    return result
  },
  flattenDepth(array, depth = 1) {
    if (!Array.isArray(array) || !array.length) {
      return []
    }
    if (depth === 0) return array
    let result = []
    for (let item of array) {
      if (Array.isArray(item)) {
        result = result.concat(zzzzreso.flattenDepth(item, depth - 1))
      } else {
        result.push(item)
      }
    }
    return result
  },
  fromPairs(pairs) {
    let result = {}
    for (let i = 0; i < pairs.length; i++) {
      if (!Array.isArray(pairs[i])) {
        result[undefined] = undefined
      } else {
        let item = zzzzreso.flattenDeep([pairs[i]])
        result[item[0]] = item[1]
      }
    }
    return result
  },
  head(array) {
    if (!Array.isArray(array)) return undefined
    return array[0]
  },
  indexOf(array, value, fromIndex = 1) {},
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
  isNumber(value) {
    return Object.prototype.toString.call(value) === '[object Number]'
  },
  isNaN(value) {
    return this.isNumber(value) && value !== +value
  },
  after(n, func) {
    var i = 0
    return function (...args) {
      if(i < n) {
        i++
      } else {
        return func(...args)
      }
    }
  },
  before(n, func) {
    var i = 0
    var result
    return function (...args) {
      if (i < n) {
        i++
        result = func(...args)
      }
      return result
    }
  },
  iteratee(func) {

  },
}
