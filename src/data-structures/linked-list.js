import { Node } from "./models/linked-list-models"
import { defaultEquals } from "../util"

export class LinkedList {
  constructor(equals = defaultEquals) {
    this.count = 0
    this.head = undefined
    this.equals = equals
  }

  push(element) {
    const node = new Node(element)
    let current
    if (this.head == null) {
      this.head = node
    } else {
      current = this.head
      while (current.next != null) {
        current = current.next
      }
      current.next = node
    }
    this.count += 1
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        this.head = current.next
      } else {
        let previous
        for (let i = 0; i < index && current.next; i++) {
          previous = current
          current = current.next
        }
        previous.next = current.next
      }
      this.count -= 1
      return current
    }
  }

  getElementAt(index) {
    if (index >= 0 && index < this.count) {
      let node = this.head
      for (let i = 0; i < index && node != null; i++) {
        node = node.next
      }
      return node
    }
  }
}

const linkedList = new LinkedList()
linkedList.push(0)
linkedList.push(1)
linkedList.push(2)
linkedList.push(3)
linkedList.push(4)
linkedList.push(5)
// linkedList.removeAt(3)
var node = linkedList.getElementAt(3)
console.log('node', node)
console.log('linkedList', linkedList)