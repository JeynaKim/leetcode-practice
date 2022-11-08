/*
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**

 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let now = head;
  while (now) {
    if (now.next && now.next.val === now.val) {
      now.next = now.next.next;
    } else {
      now = now.next;
    }
  }
  return head;
};


// Examples
// Input: head = [1,1,2]
// Output: [1, 2]

// Input: head = [1,1,2,3,3]
// Output: [1,2,3]