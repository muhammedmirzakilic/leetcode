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
var middleNode = function (head) {
  let count = 1;
  let item = head.next;
  while (item != null) {
    count++;
    item = item.next;
  }
  item = head;
  let middle = Math.ceil(count / 2);
  while (count-- > middle) {
    item = item.next;
  }
  return item;
};
