function solution(n,computers){

  let answer = 0 
  const visited =  Array.from({length:n},()=>false)

  for(let i=0; i<n; i++){
    if(!visited[i]){
      dfs(i)
      answer++
    }
  }

  function dfs(i){
    const stack = [i];
    while(stack.length){

    }
  }
}

