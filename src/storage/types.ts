export interface StorageInterface {
  /**
   * @desc 设置 Web Storage
   * @param {String} key
   * @param {any} value
   */
  set: (key: string, value: any) => void;

  /**
   * @desc 获取 Web Storage
   * @param {String} key
   * @param {Boolean} isJson,可选
   * @return {any}
   */
  get: (key: string, isJson?: boolean) => Record<any, any>;

  /**
   * @desc 检查 Web Storage 中是否存在某值
   * @param {String} key
   * @param {Boolean} isJson,可选
   * @return {Boolean}
   */
  has: (key: string, isJson?: boolean) => boolean;

  /**
   * @desc 移除 Web Storage
   * @param {String} key
   */
  remove: (key: string) => void;
}
/**
 * @desc 提供session操作接口 sessionStorage.session
 */
export interface SessionStorageInterface extends StorageInterface {
  session: StorageInterface;
}
