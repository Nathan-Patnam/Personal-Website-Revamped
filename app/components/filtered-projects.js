import Component from '@ember/component';
import { computed } from '@ember/object';
import projects from '../data/projects';
export default Component.extend({
    projectsFilterKey: 'ALL',
    filteredProjects: computed('', function() {
        return projects.data;
    })
});
