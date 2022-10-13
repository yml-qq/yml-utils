import { SessionStorageInterface, StorageInterface } from "./types";

const storage: SessionStorageInterface = {} as SessionStorageInterface;

const extend = (s: Storage): StorageInterface => {
  return {
    set(key, value) {
      if (typeof value === "object") {
        s.setItem(key, JSON.stringify(value));
      } else {
        s.setItem(key, value);
      }
      if (value === undefined || value === null) {
        s.removeItem(key);
      }
    },
    get(key, isJson = true) {
      const item = s.getItem(key) as string;
      try {
        if (isJson) {
          // JSON.parse() 可以将字符串类型转为基本数据类型
          return JSON.parse(item);
        }
      } catch (e) {
        return undefined;
      }
      return item;
    },
    has(key, isJson = false) {
      return !!(this.get(key, isJson) as string | Record<any, any>);
    },
    remove: key => {
      s.removeItem(key);
    }
  };
};

Object.assign(storage, extend(window.localStorage));
Object.assign(storage, {
  session: extend(window.sessionStorage)
});

export { storage };
