function solution(numbers, target) {
  var answer = 0;
  
  const graph = numbers.map((item)=>[+item,-item])

  const test = Array.from({length:numbers.length},()=>numbers.map((item,i,arr)=>arr.concat(item,-item)))
  
  console.log(graph)
  // console.log(test)
  return answer;
}
solution([1,5,2])