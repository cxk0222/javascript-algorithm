import { Compare, defaultCompare } from "../util"
import { Node } from "./models/node"

export default class BinarySearchTree {
  constructor(compare = defaultCompare) {
    this.compare = compare
    this.root = null
  }

  insert(key) {
    if (this.root == null) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)
    }
  }

  insertNode(node, key) {
    if (this.compare(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new Node(key)
      } else {
        this.insertNode(node.left, key)
      }
    } else {
      if (node.right == null) {
        node.right = new Node(key)
      } else {
        this.insertNode(node.right, key)
      }
    }
  }
}

var tree = new BinarySearchTree()
tree.insert(100)
tree.insert(10)
tree.insert(11)
tree.insert(9)
console.log('tree', tree)