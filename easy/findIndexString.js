// Given two strings needle and haystack, return
// the index of the first occurrence of needle in haystack,
//  or -1
// if needle is not part of haystack.
// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

const haystack = "sadbutsad";
const needle = "sad";

function strStr(h, n) {
  for (let i = 0; i <= h.length - n.length; i++) {
    if (h.startsWith(n, i)) {
      return i;
    }
  }
  return -1;
}

console.log(strStr(haystack, needle));

//otra opcion mas corta

function strStr1(haystack, needle) {
  return haystack.indexOf(needle);
}

console.log(strStr1("sadbutsad", "sad")); // → 0
console.log(strStr1("leetcode", "leeto")); // → -1
