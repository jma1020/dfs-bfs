const graph = {
  A: ['B', 'C'],
  B: ['A', 'D'],
  C: ['A', 'G', 'H', 'I'],
  D: ['B', 'E', 'F'],
  E: ['D'],
  F: ['D'],
  G: ['C'],
  H: ['C'],
  I: ['C', 'J'],
  J: ['I']
};


const bfs = (graph,start) =>{
  const checked = []
  let willcheck = []

  willcheck.push(start)

  while(willcheck.length !==0){
    const node = willcheck.shift()
    if(!checked.includes(node)){
      console.log(graph[node])
      checked.push(node)
      willcheck = willcheck.concat(graph[node])
      console.log(willcheck)
    }
  }


  return checked
}


console.log(bfs(graph,'A'))