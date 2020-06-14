


function merge(nums1, m, nums2, n) {
    let index1 = m - 1;
    let index2 = n - 1;
    let tail = m + n - 1;

    while (index1 >= 0 && index2 >= 0) {
        nums1[tail--] = nums1[index1] >= nums2[index2] ? nums1[index1--] : nums2[index2--];
    }

    if (index2 >= 0) {
        nums1.splice(0, index2 + 1, ...nums2.splice(0, index2 + 1));
    }
}