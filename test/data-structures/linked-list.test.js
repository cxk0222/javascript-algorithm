import { describe, it, expect, beforeEach } from "vitest"
import { LinkedList } from "../../src/data-structures/linked-list"

describe("LinkedList", () => {
  let list

  beforeEach(() => {
    list = new LinkedList()
  })

  it("should initialize an empty list", () => {
    expect(list.size()).toBe(0)
    expect(list.isEmpty()).toBe(true)
    expect(list.getHead()).toBeUndefined()
  })

  it("should add elements to the list", () => {
    list.push(10)
    list.push(20)
    list.push(30)
    expect(list.size()).toBe(3)
    expect(list.getHead().element).toBe(10)
  })

  it("should remove elements by index", () => {
    list.push(10)
    list.push(20)
    list.push(30)
    expect(list.removeAt(1).element).toBe(20)
    expect(list.size()).toBe(2)
    expect(list.getElementAt(1).element).toBe(30)
  })

  it("should insert elements at a given index", () => {
    list.push(10)
    list.push(30)
    list.insert(20, 1)
    expect(list.getElementAt(1).element).toBe(20)
    expect(list.size()).toBe(3)
  })

  it("should return the correct index of an element", () => {
    list.push(10)
    list.push(20)
    list.push(30)
    expect(list.indexOf(20)).toBe(1)
    expect(list.indexOf(40)).toBe(-1)
  })

  it("should remove elements by value", () => {
    list.push(10)
    list.push(20)
    list.push(30)
    expect(list.remove(20).element).toBe(20)
    expect(list.size()).toBe(2)
    expect(list.indexOf(20)).toBe(-1)
  })

  it("should return correct head of the list", () => {
    list.push(10)
    expect(list.getHead().element).toBe(10)
  })

  it("should return correct size", () => {
    expect(list.size()).toBe(0)
    list.push(10)
    expect(list.size()).toBe(1)
  })

  it("should correctly determine if the list is empty", () => {
    expect(list.isEmpty()).toBe(true)
    list.push(10)
    expect(list.isEmpty()).toBe(false)
  })
})
