let numbers = [12, 9, 10, 5, 1];

let min = (numbers) => {
  if (numbers.length > 2) {
    return min([numbers[0], min(numbers.slice(1))]);
  } else {
    return Math.min.apply(null, numbers);
  }
};

let minIndex = (numbers) => numbers.indexOf(min(numbers));

let sort = (numbers) => {
  if (numbers.length > 2) {
    let index = minIndex(numbers); // 拿到numbers最小的元素的下标
    let min = numbers[index]; // 最小的元素
    numbers.splice(index, 1); // 从numbers删掉最小的元素min
    return [min].concat(sort(numbers));
  } else {
    return numbers[0] < numbers[1] ? numbers : numbers.reverse();
  }
};
let s = sort(numbers);
console.log(s);
