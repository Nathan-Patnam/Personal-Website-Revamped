import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | view projects', function(hooks) {
    setupApplicationTest(hooks);

    test('visiting every page', async function(assert) {
        await visit('/');
        assert.equal(currentURL(), '/');

        await click('[data-test-projects-heading] a');
        assert.equal(currentURL(), '/projects');

        assert.dom('[data-test-filtered-projects]').exists();
        assert
            .dom('[data-test-filtered-projects] [data-test-project]')
            .exists({ count: 3 });
    });
});
