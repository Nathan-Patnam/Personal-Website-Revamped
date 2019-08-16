import Component from '@ember/component';
import { computed } from '@ember/object';
import projects from '../data/projects';
export default Component.extend({
    projectsFilterKey: 'ALL',
    filteredProjects: computed('projectsFilterKey', function() {
        const data = projects.data;
        const filterKey = this.projectsFilterKey;
        if (filterKey === 'ALL') {
            return data;
        }
        return data.filter(item => {
            return item.title, item.type.includes(filterKey);
        });
    })
});
