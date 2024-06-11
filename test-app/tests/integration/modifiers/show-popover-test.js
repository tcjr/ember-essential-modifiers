import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Modifier | show-popover', function (hooks) {
  setupRenderingTest(hooks);

  test('renders popover', async function (assert) {
    await render(hbs`<div role="alert" popover="manual">123</div>`);
    assert.dom('div[popover]:popover-open').doesNotExist();

    await render(
      hbs`<div role="alert" popover="manual" {{show-popover}}>123</div>`,
    );
    assert.dom('div[popover]:popover-open').exists();
  });
});
