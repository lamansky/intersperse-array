'use strict'

const assert = require('assert')
const intersperse = require('.')

describe('intersperseArray()', function () {
  it('should add a constant value between each array item', function () {
    assert.strictEqual(JSON.stringify(intersperse(['work', 'work'], 'break')), JSON.stringify(['work', 'break', 'work']))
  })

  it('should pass four arguments to separator callback function', function () {
    let called = 0
    intersperse('ab', (index1, value1, index2, value2) => {
      called++
      assert.strictEqual(index1, 0)
      assert.strictEqual(value1, 'a')
      assert.strictEqual(index2, 1)
      assert.strictEqual(value2, 'b')
    })
    assert.strictEqual(called, 1)
  })

  it('should add separator function return value between each array item', function () {
    const arr = intersperse([1, 3, 5], (index1, value1, index2, value2) => value1 + value2)
    assert.strictEqual(JSON.stringify(arr), JSON.stringify([1, 4, 3, 8, 5]))
  })

  it('shouldn’t add anything if the array is empty', function () {
    assert.strictEqual(intersperse([], 'separator').length, 0)
  })

  it('shouldn’t add anything if the array has only one item', function () {
    assert.strictEqual(JSON.stringify(intersperse(['forever alone'], 'separator')), JSON.stringify(['forever alone']))
  })

  it('should support the bind operator', function () {
    assert.strictEqual(JSON.stringify(intersperse.call('ac', 'b')), JSON.stringify(['a', 'b', 'c']))
  })
})
