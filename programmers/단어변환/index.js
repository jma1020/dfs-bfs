/**
 * 단어변환
 * https://school.programmers.co.kr/learn/courses/30/lessons/43163
 */
function solution(begin, target, words) {
  if (!words.includes(target)) {
    return 0;
  }

  const getDiff = (word1, word2) => {
    let diff = 0;
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] !== word2[i]) diff++;
    }
    return diff;
  };

  const checked = new Set();
  const willCheck = [[begin, 0]];

  while (willCheck.length !== 0) {
    const [current, count] = willCheck.shift();
    if (current === target) {
      return count;
    }

    for (const word of words) {
      if (checked.has(word)) {
        continue;
      }
      const diff = getDiff(current, word);
      if (diff === 1) {
        willCheck.push([word, count + 1]);
        checked.add(word);
      }
    }
  }

  return 0;
}


solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']);
