/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const head = new ListNode(0);
    let lead = 0;
    let tail = head;

    do {
        const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + lead;
        lead = Math.floor(sum / 10);
        tail.next = new ListNode(sum % 10);
        tail = tail.next;
        l1 = l1?.next;
        l2 = l2?.next;
    } while (l1 != null || l2 != null || !!lead);

    return head.next;
};
