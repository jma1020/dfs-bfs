/*
  프로그래머스 네트워크
  https://school.programmers.co.kr/learn/courses/30/lessons/43162

  dfs bfs 문제
*/


function solution(n, computers) {


  var answer = 0;

  let checked = Array.from({length:3},()=>false)


  for (let i =0; i<n; i++){
    if(!checked[i]){
      answer++
      dfs(i)
    }
  }

  function dfs(i){

    checked[i] = true

    for( const  j of computers[i]){
      console.log(checked)
      console.log(i,j)
      if(!checked[j]&& computers[i][j]){
        dfs(j)
      }
    }

  }

  console.log(answer)
  return answer;
}

solution(3,[[1, 1, 0], [1, 1, 0], [0, 0, 1]])