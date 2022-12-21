const fs = require('fs')


const input = fs.readFileSync('./2644/example.txt').toString().trim().split('\n');

const N = input[0]
const [needFrom, needTo] = input[1].split(' ')
const M = input[2]

const graph = Array.from({length:+N+1}).map(()=>[])

for(let i = 3; i<3+Number(M); i++){
  const [from,to] = input[i].split(' ').map((item)=>+item)
  graph[from].push(to)
  graph[to].push(from)
}
  

function dfs(){

  let answer = 0

  let checked = []
  let willCheck = [needFrom]

  while(willCheck.length!==0){
    

    const node = willCheck.shift()
    
    console.log(node,needTo)

    if(!checked.includes(node)){
      willCheck = [...willCheck,...graph[node]]
      checked.push(node)

      answer++
    }

  }


}

dfs()


