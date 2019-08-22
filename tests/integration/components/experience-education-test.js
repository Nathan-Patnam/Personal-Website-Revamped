import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | experience-education', function(hooks) {
    setupRenderingTest(hooks);

    hooks.beforeEach(async function() {
        await render(hbs`<ExperienceEducation />`);
    });

    test('experience renders', async function(assert) {
        assert.dom('[data-test-experience]').exists();
    });

    test('proper number of experiences render ', async function(assert) {
        assert.dom('[data-test-experience] div.item').exists({ count: 5 });
    });
});
