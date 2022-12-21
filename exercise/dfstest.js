const fs = require('fs');

const readLine = (()=>{
  let line = 0 

  const lines = fs.readFileSync('./example.txt').toString().trim().split('/\s/');


  return ()=>lines[line++]
})()

function* range(start,end){
  let value = end === undefined ? 0 : start;
  const endValue = end === undefined ? start: end

  while (value <endValue ){
    yield value++
  }
}

//나도 range readLine 을 쓰고 싶었지만, 환경에 따라 안되는듯????

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

  console.log(graph)
  function bfs(){
    let checked = []
    let willCheck = [V]

    while(willCheck.length !==0){
      const node = +willCheck.shift()
   
      if(!checked.includes(node)){
        checked.push(node)
    
        console.log(node)
        willCheck = [...willCheck,...graph[node]]
 
      }

    }

    console.log(checked.join(' '))

    
  }
  bfs()
}

solution()



