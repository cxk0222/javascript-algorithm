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
}

const linkedList = new LinkedList()
linkedList.push(0)
linkedList.push(1)
linkedList.push(2)
linkedList.push(3)
linkedList.push(4)
linkedList.push(5)
console.log('linkedList', linkedList)