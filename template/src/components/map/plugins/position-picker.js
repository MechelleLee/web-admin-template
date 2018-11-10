import ScriptLoader from '../../../jslib/script-loader';

export default class PositionPicker {
  // eslint-disable-next-line
  constructor(map, mode = 'dragMarker', icon) {
    this.icon = icon;
    this.map = map;
    this.mode = mode;

    this.success = this.success.bind(this);
    this.fail = this.fail.bind(this);
  }

  // eslint-disable-next-line
  async init() {
    if (!window.AMapUI) {
      const src = 'https://webapi.amap.com/ui/1.0/main.js?v=1.0.11';
      const loader = new ScriptLoader(src);
      await loader.load();
    }

    const { mode, map } = this;

    window.AMapUI.loadUI(['misc/PositionPicker'], (PositionPickerPlugin) => {
      const picker = new PositionPickerPlugin({
        mode,
        map,
      });

      this.picker = picker;

      picker.on('success', result => this.success(result));
      picker.on('fail', result => this.fail(result));

      picker.start();
      map.panBy(0, 1);
    });
  }

  // eslint-disable-next-line
  success(result) {
    console.log('====================================');
    console.log(result);
    console.log('====================================');
  }

  // eslint-disable-next-line
  fail(result) {
    console.log('====================================');
    console.log(result);
    console.log('====================================');
  }

  start() {
    this.picker.start();
  }

  stop() {
    this.picker.stop();
  }
}
