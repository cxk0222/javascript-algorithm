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

  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback)
  }

  inOrderTraverseNode(node, callback) {
    if (node != null) {
      // console.log('inOrderTraverseNode left', node.left?.key)
      this.inOrderTraverseNode(node.left, callback)
      // console.log('inOrderTraverseNode callback', node)
      callback(node.key)
      // console.log('inOrderTraverseNode right', node.right?.key)
      this.inOrderTraverseNode(node.right, callback)
    }
  }
}

const tree = new BinarySearchTree()
tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)
tree.insert(6)
// console.log('tree', tree)

const printNode = (value) => console.log(value)
tree.inOrderTraverse(printNode)