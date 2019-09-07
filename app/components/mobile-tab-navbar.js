import Component from '@ember/component';
import { computed } from '@ember/object';
import mobileNavIcons from '../data/mobile-nav-icons';
export default Component.extend({
    navIcons: computed(function() {
        return mobileNavIcons.data;
    })
});
