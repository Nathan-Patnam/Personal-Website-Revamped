import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | footer', function(hooks) {
    setupRenderingTest(hooks);

    hooks.beforeEach(async function() {
        await render(hbs`<Footer />`);
    });

    test('it renders', async function(assert) {
        assert.dom('[data-test-footer]').exists();
    });

    test('correct number of icons rendered ', async function(assert) {
        assert.dom('[data-test-footer] a').exists({ count: 6 });
    });
});
