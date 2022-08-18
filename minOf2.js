// let minOf2 = function () {
//   if (number[0] > number[1]) {
//     return number[1];
//   } else {
//     return number[0];
//   }
// };

// 第一次优化
// let minOf2 = (numbers) => (number[0] > number[1] ? number[1] : number[0]);

// 第二次优化：析构赋值
let minOf2 = ([a, b]) => (a < b ? a : b)

// 调用方法
// 小白调用
minOf2([2, 6]);
console.log(minOf2([2, 6]));

// 高手调用
minOf2.call(null, [355, 190])
console.log(minOf2.call(null, [355, 190]));