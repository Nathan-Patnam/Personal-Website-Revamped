import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | view more button dissapears', function(hooks) {
    setupApplicationTest(hooks);

    test('viviewing all 8 recommendations and the view more button dissapears', async function(assert) {
        await visit('/');
        assert.equal(currentURL(), '/');

        await click('[data-test-services-heading] a');
        assert.equal(currentURL(), '/services');

        assert.dom('[data-test-view-more-reccomendations]').exists();

        await click('[data-test-view-more-reccomendations]');
        await click('[data-test-view-more-reccomendations]');
        assert.dom('[data-test-view-more-reccomendations]').doesNotExist();
    });
});
