// 非効率な関数：余計な変数と複雑なロジックを使っている
function getEvenNumbers(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      let isEven = true;
      if (!isEven) {
        continue;
      }
      result.push(arr[i]);
    }
  }
  return result;
}
