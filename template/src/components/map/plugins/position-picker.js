import ScriptLoader from '../../../jslib/script-loader';

export default class PositionPicker {
  // eslint-disable-next-line
  constructor(icon) {
    this.icon = icon;
  }

  // eslint-disable-next-line
  async init() {
    if (!window.AMapUI) {
      const loader = new ScriptLoader();
    }
  }
}
