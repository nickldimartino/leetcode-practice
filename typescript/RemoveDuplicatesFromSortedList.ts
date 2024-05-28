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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    // initialize a variable to received head node
    let current: ListNode = head;

    // the current node value and next node value can't be null
    while (current !== null && current.next !== null) {
        // check if the current node is equal to the next node
        if (current.next.val === current.val) {
            // if it is, then set the next node to the next next node
            current.next = current.next.next;
        } else {
            // else set the current node to the next node
            current = current.next;
        }
    }

    // return the head after it's been modified
    return head;
};
