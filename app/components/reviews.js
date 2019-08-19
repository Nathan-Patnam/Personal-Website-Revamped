import Component from '@ember/component';
import { computed } from '@ember/object';
import reviewsAsJSON from '../data/reviews';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Component.extend({
    tagName: '',
    reviewList: computed(function() {
        return reviewsAsJSON.data;
    }),
    pagedContent: pagedArray('reviewList', { infinite: 'unpaged', perPage: 2 }),
    actions: {
        loadNext: function() {
            this.get('pagedContent').loadNextPage();
        }
    }
});
