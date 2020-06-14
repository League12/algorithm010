


function mergeTwoLists(l1, l2) {
    const prevHead = new ListNode(-1);
    let prev = prevHead;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            prev.next = l1;
            l1 = l1.next;
        } else {
            prev.next = l2;
            l2 = l2.next;
        }
        prev = prev.next;
    }

    prev.next = l1 || l2;

    return prevHead.next;
}