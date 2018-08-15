var nums1 = 0;
document.getElementById('cat-img1').addEventListener('click', function (e) {
    nums1 = nums1 + 1;
    document.getElementById('num1').innerHTML = nums1;
});

var nums2 = 0;
document.getElementById('cat-img2').addEventListener('click', function (e) {
    nums2 = nums2 + 1;
    document.getElementById('num2').innerHTML = nums2;
});