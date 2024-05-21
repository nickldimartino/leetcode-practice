/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    // create new linked list with 0 as the head
    const preHead: ListNode = new ListNode(0, null);

    // set the previous node to the current head of the new linked list
    let preNode: ListNode = preHead;

    // the two received lists should not be empty
    while (list1 !== null && list2 !== null) {
        // check which list's value is lower than the other
        if (list1.val < list2.val) {
            // if list1 has the lower value, set the next node to this value
            preNode.next = list1;

            // iterate to the next list in list1
            list1 = list1.next;
        } else {
            // if list2 has the lower value, set the next node to this value
            preNode.next = list2;

            // iterate to the next list in list2
            list2 = list2.next;
        }

        // set the node to the next node
        preNode = preNode.next;
    }

    // once one of the received lists are empty, set the rest of the linked list
    // to the rest of list1 or list2
    preNode.next = list1 == null ? list2: list1;

    // return the head of the merged list
    return preHead.next;
};
