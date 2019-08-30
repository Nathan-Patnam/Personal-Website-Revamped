import { module, test } from 'qunit';
import { visit, click, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | visit pages', function(hooks) {
    setupApplicationTest(hooks);

    test('visiting every page', async function(assert) {
        await visit('/');
        assert.equal(currentURL(), '/');

        await click('[data-test-experience-heading] a');
        assert.equal(currentURL(), '/experience');

        await click('[data-test-about-me-heading] a');
        assert.equal(currentURL(), '/');

        await click('[data-test-services-heading] a');
        assert.equal(currentURL(), '/services');

        await click('[data-test-projects-heading] a');
        assert.equal(currentURL(), '/projects');
    });
});
