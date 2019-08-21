import Component from '@ember/component';
import { computed } from '@ember/object';
import experience from '../data/experiences';
import education from '../data/experiences';
export default Component.extend({
    experiences: computed(function() {
        return experience.data;
    }),
    educations: computed(function() {
        return education.data;
    })
});
