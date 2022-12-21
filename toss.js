/**
 * solution('가')('나')('다')() => 가 나 다
 * solution('가')('나')('다')('라')('마')() => 가 나 다 라 마
 */
async function fetchList(){
  return [1, 2, 3,4,5];
}

async function fetchItem(id){
  return new Promise((resolve) => fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then((response) => response.json())
  .then((json) => resolve(json)));
};

/**
 * Promise<[data1, data2, data3, data4]>;
 */
function solution(){
  return new Promise((resolve)=>fetchList().then(value=>value.map((item)=> fetchItem(item))).then(value=>resolve(value)))
}