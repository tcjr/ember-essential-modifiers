import Modifier from 'ember-modifier';
import { cancel, later } from '@ember/runloop';
import { registerDestructor } from '@ember/destroyable';

const cleanup = function (instance) {
  // eslint-disable-next-line ember/no-runloop
  cancel(instance.closeTask);
};

export default class ShowPopover extends Modifier {
  constructor() {
    super(...arguments);
    registerDestructor(this, cleanup);
  }

  // eslint-disable-next-line no-empty-pattern
  modify(element, [], { duration = 0 }) {
    element.showPopover();
    this.closeTask = this.autoClose(element, duration);
  }

  autoClose(element, duration) {
    // eslint-disable-next-line ember/no-runloop
    return later(
      this,
      function () {
        if (!duration) {
          return;
        }

        element.hidePopover();
      },
      duration,
    );
  }
}
