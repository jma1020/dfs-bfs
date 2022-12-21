const fs = require('fs');

function solution(){
  const  input =fs.readFileSync('./example.txt').toString().trim().split('\n');
  const [N,M,V] = input[0].split(' ')

  const graph =  Array.from({length:+N+1}).map(()=>[])
  
  
  for (let i = 1; i<= M; i++){
    const [from,to] = input[i].split(' ').map((item)=>+item)
    graph[from].push(to)
    graph[to].push(from)

    graph.map(item=>item.sort((a,b)=>a-b))
  }



  function bfs(){
    let checked = new Set([])
    let willCheck = [V]

    while(willCheck.length !==0){
      const node = +willCheck.shift()
   
      if(!checked.has(node)){
        checked.add(node)
    
   
           
        willCheck = [...willCheck,...graph[node]]
 
      }
    
    }
    console.log([...checked].join(' '))

  }
  
  function dfs(){
    let checked = new Set([])
    let willCheck = [V]

    while(willCheck.length !==0){
      const node = +willCheck.shift()
   
      if(!checked.has(node)){
        checked.add(node)
    
      
        willCheck = [...graph[node],...willCheck]
 
      }

    }

    console.log([...checked].join(' '))

    
  }
  dfs()
  bfs()
}


solution()