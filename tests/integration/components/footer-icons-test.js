import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | footer-icons', function(hooks) {
    setupRenderingTest(hooks);

    hooks.beforeEach(async function() {
        await render(hbs`<FooterIcons />`);
    });

    test('it renders', async function(assert) {
        assert.dom('[data-test-footer-icons]').exists();
    });

    test('correct number of icons rendered ', async function(assert) {
        assert.dom('[data-test-footer-icons] a').exists({ count: 8 });
    });
});
