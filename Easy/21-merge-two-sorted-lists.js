// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// var mergeTwoLists = function (list1, list2) {
//   let result = [];

  //   let x = new ListNode()
  //   for (let i = 0; i < list1.length; i++) {
  //     for (let j = 0; j < list2.length; j++) {
  //       if (i === null) {
  //         result.push(j)
  //       } else if (j === null) {
  //         result.push(i)
  //       } else if (i > j) {
  //         result.push(j)
  //         j.next
  //       } else if (j > i) {
  //         result.push(i)
  //         i.next
  //       }
  //       console.log(result)
  //       return result
  //     }
  //   }
  // }

  
  function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val),
      this.next = (next === undefined ? null : next)
  }

  let list1_b = new ListNode(5)
  let list1_a = new ListNode(3, list1_b)
  let list1 = new ListNode(1, list1_a)

  let list2_b = new ListNode(9)
  let list2_a = new ListNode(3, list2_b)
  let list2 = new ListNode(2, list2_a)
  
  let newListNode = [];
  
while (list1 || list2) {
  if (list1 !== null) {
    console.log(list1.val)
    newListNode.push(list1.val)
    list1 = list1.next
  } else {
    console.log(list2.val)
    newListNode.push(list2.val)
    list2 = list2.next
  }
}

console.log(newListNode);