import Component from '@ember/component';
import { computed } from '@ember/object';
import reviews from '../data/reviews';

export default Component.extend({
    tagName: '',
    foo: computed('reviews', function() {
        return reviews.data;
    })
});
