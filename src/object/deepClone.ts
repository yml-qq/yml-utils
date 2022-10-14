export const deepClone = (values: any): any => {
  let copy: any;

  if (values === null || typeof values !== "object") return values;

  if (values instanceof Date) {
    copy = new Date();
    copy.setTime(values.getTime());
    return copy;
  }

  if (values instanceof Array) {
    copy = [];
    for (let i = 0; i < values.length; i++) {
      copy[i] = deepClone(values[i]);
    }
    return copy;
  }

  if (values instanceof Object) {
    copy = {};
    for (const attr in values) {
      /* 判断对象本身还有无属性 */
      if (Object.prototype.hasOwnProperty.call(values, attr)) {
        copy[attr] = deepClone(values[attr]);
      }
    }
    return copy;
  }

  throw new Error("不支持该数据类型");
};
