//사람마다 풀이도 다 다르고... 너무 천지차이여서 많은코드를 봤지만.. 나만의 흐름을 가진 코드 얘기해주셨던 대로...

const fs = require('fs');


function solution(){
  const input = fs.readFileSync('./2606/example.txt').toString().trim().split('\n');


  const N = input[0]
  const M = input[1]


  const graph = Array.from({length:+N+1}).map(()=>[])

  for(let i = 2; i<=+M+1 ; i++){
    const [from,to] = input[i].split(' ').map((item)=>+item)
    // 전체 형변환과 개행문자 제거...
    graph[from].push(to)
    graph[to].push(from)

  
  }


  function bfs(){


    const checked = []
    let willCheck = [1]
    
    while(willCheck.length !==0){
      const node = willCheck.shift()
    
      if(!checked.includes(node)){
 
        willCheck = [...willCheck,...graph[node]]
        checked.push(node)


        
      }
    }

    console.log(checked.length-1)
  }
  bfs()
}

solution()