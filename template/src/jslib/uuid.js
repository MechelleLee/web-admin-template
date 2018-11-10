/**
 * @author zhi
 * @description 用于生成组件的UUID
 */

const sequence = () =>
  // eslint-disable-next-line
  (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);

const uuid = (prefix = 'code', level = 4) => {
  const temp = [];

  for (let i = 0; i < level; i += 1) {
    temp.push(sequence());
  }

  return prefix + temp.join('-');
};

export default uuid;
