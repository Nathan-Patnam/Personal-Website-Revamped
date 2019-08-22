import Component from '@ember/component';
import { computed } from '@ember/object';
import reviewsAsJSON from '../data/reviews';
import pagedArray from 'ember-cli-pagination/computed/paged-array';
import { alias } from '@ember/object/computed';

export default Component.extend({
    tagName: '',
    reviewList: computed(function() {
        return reviewsAsJSON.data;
    }),
    moreResultsToShow: computed('page', function() {
        const currPageNumber = this.get('pagedContent').page;
        const totalNumberPages = this.get('pagedContent').all.totalPages;
        return currPageNumber < totalNumberPages;
    }),
    pagedContent: pagedArray('reviewList', { infinite: 'unpaged', perPage: 3 }),
    actions: {
        loadNext: function() {
            this.get('pagedContent').loadNextPage();
        }
    },
    // binding the property on the paged array
    // to the query params on the controller
    page: alias('pagedContent.page'),
    totalPages: alias('pagedContent.all.totalPages')
});
