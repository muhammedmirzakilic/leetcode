/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let front = head;
  let rear = head;
  let i = 0;
  while (i++ < n && rear !== null) {
    rear = rear.next;
  }
  if (!rear) {
    return (head = head.next);
  }
  while (rear != null && rear.next != null) {
    rear = rear.next;
    front = front.next;
  }
  if (!front.next) front = front.next;
  else front.next = front.next.next;
  return head;
};

const n = [1, 2, 3, 4, 5, 6];
