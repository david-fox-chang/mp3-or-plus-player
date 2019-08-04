const getHash = (name) => {
  if (!name.length) return '';
  return [...name].reduce((hash, chr) => (
    (((hash * (2 ** 5)) - hash) + chr.codePointAt())
  ), 0);
};

const getRandomId = (len = 8) => {
  const dic = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const dicMaxInd = dic.length - 1;
  let ans = '';
  for (let i = 0; i < len; i += 1) {
    ans += dic[Math.random() * dicMaxInd];
  }

  return ans;
};

// eslint-disable-next-line func-names
const genGetRandomListId = function* (len = 8, start = 0) {
  let i = start;
  while (true) {
    yield { id: i += 1, randomId: getRandomId(len) };
  }
};

const defaultListNames = [
  { artist: 'Alan Walker', name: 'Faded', length: '3m32s' },
  { artist: 'Alan Walker', name: 'Alone', length: '2m43s' },
  { artist: 'Alan Walker', name: 'The Spectre', length: '3m26s' },
  { artist: 'Alan Walker', name: 'Sing Me To Sleep', length: '3m11s' },
  { artist: 'Alan Walker', name: 'Darkside', length: '3m59s' },
  { artist: 'Alan Walker', name: 'All Falls Down', length: '3m40s' },
  { artist: 'Ed Sheeran', name: 'Perfect', length: '4m39s' },
  { artist: 'Ed Sheeran', name: 'Photograph', length: '4m34s' },
  { artist: '滴妹', name: 'Darkside', length: '2m36s' },
  { artist: '滴妹', name: 'Perfect', length: '3m37s' },
];

const timeStringToSec = (time) => {
  const [, num, unit] = time.match(/(\d+)([hms])/);
  return parseInt(num, 10) * { h: 3600, m: 60, s: 1 }[unit];
};

const lenToSec = (len) => {
  if (typeof len === 'string' && len.match && len.match(/^\d+m(\d+s)?$/)) {
    const lenStrArr = len.match(/^(\d+m)(\d+s)?$/);
    const m = lenStrArr.shift();
    if (m !== len) throw new Error(`'${m}' from '${len}', but not equal`);
    return lenStrArr.reduce((sum, item) => (sum + timeStringToSec(item)), 0);
  }
  if (typeof len === 'number') return len;
  return 0;
};

const getRandomListId = genGetRandomListId();

const defaultList = defaultListNames.map(
  item => Object.assign(
    item,
    getRandomListId.next().value,
    { length: lenToSec(item.length) },
  ),
);

export default {
  getHash,
  getRandomId,
  genGetRandomListId,
  defaultListNames,
  getRandomListId,
  defaultList,
  lenToSec,
};
