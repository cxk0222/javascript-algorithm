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
        const previous = this.getElementAt(index - 1)
        current = previous.next
        previous.next = current.next
      }
      this.count -= 1
      return current
    }
  }

  getElementAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      for (let i = 0; i < index && current != null; i++) {
        current = current.next
      }
      return current
    }
  }

  insert(element, index) {
    if (index >= 0 && index < this.count) {
      const node = new Node(element)
      if (index === 0) {
        const current = this.head
        node.next = current
        this.head = node
      } else {
        const previous = this.getElementAt(index - 1)
        const current = previous.next
        previous.next = node
        node.next = current
      }
      this.count += 1
      return node
    }
  }
}

const linkedList = new LinkedList()
linkedList.push('a')
linkedList.push('b')
linkedList.push('c')
linkedList.push('d')
linkedList.push('e')
linkedList.push('f')
// linkedList.removeAt(3)
linkedList.insert('bb', 2)
// linkedList.remove('c')
console.log('linkedList', linkedList)