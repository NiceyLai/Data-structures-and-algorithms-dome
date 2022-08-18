let numbers = [12, 14, 6, 1, 5, 8, 7, 9];

let min = (arr1) => {
  if (arr1.length > 2) {
    return min([arr1[0], min(arr1.slice(1))]);
  } else {
    return Math.min.apply(null, arr1);
  }
};
min(numbers);
let minIndex = (numbers1) => {
  numbers1.indexOf(min(numbers));
};
minIndex(numbers);
console.log(minIndex(numbers));

let sort = (numbers) => {
  if (numbers.length > 2) {
    let index = minIndex(numbers);
    let min = numbers[index];
    console.log("0");
    console.log(min);

    // 从numbers删掉min
    numbers.splice(index, 1);
    return [min].concat(sort(numbers));
  } else {
    return numbers[0] < numbers[1] ? numbers : numbers.reverse();
  }
};
sort(numbers);
// console.log(sort(numbers));
