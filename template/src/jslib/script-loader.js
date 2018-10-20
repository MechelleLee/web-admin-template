/**
 * @author zhi
 * @description 用于动态加载 js 或 css, 配合组件封装使用
 * @export
 * @class ScriptLoader
 */
export default class ScriptLoader {
  constructor(url, tag = 'script', type = 'text/javascript') {
    this.tag = tag;
    this.url = url;
    this.type = type;

    this.loader = this.load.bind(this);
  }

  load() {
    if (!document) {
      throw Object.assign(new Error(), {
        type: 'loader',
        message:
          'the runtime environment of script is not brower, please check your code or use loading lazy!',
      });
    }
    // 安全检查
    this.security();

    const { tag, url, type } = this;

    const element = document.createElement(tag);
    element.type = type;
    element.defer = true;
    element.async = true;
    element.src = url;
    document.head.appendChild(element);

    return new Promise((resolve, reject) => {
      element.onload = () => {
        setTimeout(resolve);
      };

      element.onerror = error => reject(
        Object.assign(error, {
          type: 'loader',
          message: 'the resource of script is load failure',
        }),
      );
    });
  }

  security() {
    const { protocol } = window.location;
    const status = /^http:/.test(protocol);

    const { url } = this;
    if (/^http:/.test(url) && !status) {
      throw Object.assign(new Error(), {
        type: 'loader',
        message: "this is safety problem, please don't use the script of http in the site of https",
      });
    }
  }
}
