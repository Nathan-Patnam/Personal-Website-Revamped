import Component from '@ember/component';
import { computed } from '@ember/object';
import footerLogos from '../data/footer-logos';
export default Component.extend({
    tagName: '',
    mediaLinks: computed(function() {
        return footerLogos.data;
    })
});
