function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  const direction = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0],
  ];

  const isMovable = (x, y) =>
    0 <= x && x < n && 0 <= y && y < m && maps[x][y] === 1 && !visited[x][y];

  let queue = [[0, 0, 1]];
  const visited = new Array(n).fill().map(() => new Array(m).fill(false));
  visited[0][0] = true;

  while (queue.length !== 0) {
    const nextQueue = [];
    for (const [x, y, count] of queue) {
      if (x === n - 1 && y === m - 1) {
        return count;
      }
      for (const [dx, dy] of direction) {
        const [nx, ny] = [x + dx, y + dy];
        if (isMovable(nx, ny)) {
          visited[nx][ny] = true;
          nextQueue.push([nx, ny, count + 1]);
        }
      }
    }
    queue = nextQueue;
  }

  return -1;
}

// 테스트 1 〉	통과 (44.57ms, 38.3MB)
// 테스트 2 〉	통과 (20.62ms, 38.1MB)
// 테스트 3 〉	통과 (41.88ms, 38.3MB)
// 테스트 4 〉	통과 (22.00ms, 38.1MB)