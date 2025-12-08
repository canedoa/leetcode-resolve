const nums = [1, 2, -3, 4, -5, 6];

const categorize = (nums) =>
  nums.reduce(
    (acc, n) => {
      // clasificar pares e impares
      if (n % 2 === 0) acc.even.push(n);
      else acc.odd.push(n);

      // clasificar positivos
      if (n > 0) acc.positive.push(n);

      return acc; // obligatorio
    },
    {
      even: [],
      odd: [],
      positive: [],
    }
  );
