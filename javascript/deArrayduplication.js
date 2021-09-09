/**
 * 对象去重
 * @param {对象数组} array
 * @param {去重的key} dupField
 * @returns
 */
const deArrayduplication = (array, dupField) => {
  if (typeof dupField === 'undefined') return array;
  const hasMap = {};
  const results = [];
  for (const obj of array) {
    const value = obj[dupField];
    if (hasMap[value]) {
      hasMap[value] += 1;
    } else {
      hasMap[value] = 1;
      results.push(obj);
    }
  }
  return results;
};
