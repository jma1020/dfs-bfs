function solution(numbers, target) {

  function dfs(index, sum) {
    console.log(index, sum);
    if (index === numbers.length) {
      return sum === target ? 1 : 0;
    }
    return dfs(index + 1, sum + numbers[index]) + dfs(index + 1, sum - numbers[index]);
  }

  return dfs(0, 0);
}

console.log(solution([4, 1, 2, 1], 4));