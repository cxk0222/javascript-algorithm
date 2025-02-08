import { Node } from '../../../src/data-structures/models/linked-list-models'
import { expect, test } from 'vitest'

// 测试 Node 类的构造函数是否正确设置 element 属性
test('Node constructor sets element correctly', () => {
  const element = 'test'
  const node = new Node(element, null)
  expect(node.element).toBe(element)
})

// 测试 Node 类的构造函数是否正确设置 next 属性
test('Node constructor sets next correctly', () => {
  const next = new Node('next', null)
  const node = new Node('test', next)
  expect(node.next).toBe(next)
})

// 测试 Node 类的构造函数在 next 为 undefined 时的情况
test('Node constructor handles undefined next', () => {
  const node = new Node('test', undefined)
  expect(node.next).toBeUndefined()
})