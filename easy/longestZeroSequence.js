const nums = [1, 0, 0, 1, 0, 0, 0, 1];

function longestZeroSequence(nums) {
  let count = 0;
  let streak = 0;
  for (let num of nums) {
    if (num === 0) {
      count++;

      if (count > streak) {
        streak = count;
      }
    } else {
      count = 0;
    }
  }

  return streak;
}

console.log(longestZeroSequence(nums));
