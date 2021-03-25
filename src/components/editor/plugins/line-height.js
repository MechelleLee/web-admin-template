import Collection from '@ckeditor/ckeditor5-utils/src/collection';
import Model from '@ckeditor/ckeditor5-ui/src/model';
import {
  createDropdown,
  addListToDropdown,
} from '@ckeditor/ckeditor5-ui/src/dropdown/utils';

export default class CloudUpload {
  static get pluginName() {
    return 'LineHeight';
  }

  constructor(editor) {
    this.editor = editor;
  }

  init() {
    // eslint-disable-next-line
    const { editor } = this;
    const { t } = editor;

    if (!editor) {
      return;
    }

    // eslint-disable-next-line
    const options = this._getLocalizedOptions();
    const command = editor.commands.get('LineHeight');

    // eslint-disable-next-line
    editor.ui.componentFactory.add('LineHeight', locale => {
      // eslint-disable-next-line
      const dropdownView = new createDropdown(locale);
      addListToDropdown(
        dropdownView,
        // eslint-disable-next-line
        this._prepareListOptions(options, command),
      );

      dropdownView.buttonView.set({
        label: t('Line Height'),
        tooltip: true,
        withText: false,
      });

      // dropdownView.bind('isEnabled').to(command);

      // eslint-disable-next-line
      // this.listenTo(dropdownView, 'execute', evt => {
      //   editor.execute(evt.source.commandName, {
      //     value: evt.source.commandParam,
      //   });
      //   editor.editing.view.focus();
      // });

      return dropdownView;
    });
  }

  // eslint-disable-next-line
  _getLocalizedOptions() {
    return [
      {
        title: '10',
        model: '10',
        view: {
          name: 'span',
          styles: {
            'font-size': '10px',
          },
          priority: 5,
        },
      },
    ];
  }

  // eslint-disable-next-line
  _prepareListOptions(options, command) {
    const itemDefinitions = new Collection();

    // eslint-disable-next-line
    for (const option of options) {
      const def = {
        type: 'button',
        model: new Model({
          commandName: 'LineHeight',
          commandParam: option.model,
          label: option.title,
          withText: true,
        }),
      };

      if (option.view && option.view.styles) {
        def.model.set(
          'labelStyle',
          `font-size:${option.view.styles['font-size']}`,
        );
      }
      // debugger;
      // def.model
      //   .bind('isOn')
      //   .to(command, 'value', value => value === option.model);

      // Add the option to the collection.
      itemDefinitions.add(def);
    }

    return itemDefinitions;
  }
}
