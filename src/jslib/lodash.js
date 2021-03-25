export default class Lodash {
  /**
   *
   *
   * @static
   * @param {*} callback
   * @param {number} [interval=50]
   * @returns
   * @memberof Lodash
   * @description 抖动函数
   */
  static debounce(callback, interval = 50) {
    let timer = null;

    return () => {
      console.log('====================================');
      console.log('dala');
      console.log('====================================');
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        callback();
      }, interval);
    };
  }
}
