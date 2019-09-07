import Component from '@ember/component';
import { computed } from '@ember/object';
import projects from '../data/projects';

export default Component.extend({
    projectsFilterKey: 'APP',
    filterOptions: computed(function() {
        const filtersToKey = {
            'Web Apps': 'APP',
            Videos: 'VIDEO',
            Articles: 'ARTICLE',
            All: 'ALL'
        };
        return filtersToKey;
    }),
    filteredProjects: computed('projectsFilterKey', function() {
        const data = projects.data;
        const filterKey = this.projectsFilterKey;
        if (filterKey === 'ALL') {
            return data;
        }
        let filteredData = data.filter(item => {
            return item.title, item.type.includes(filterKey);
        });

        let counter = filteredData.length;

        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            let index = Math.floor(Math.random() * counter);

            // Decrease counter by 1
            counter--;

            // And swap the last element with it
            let temp = filteredData[counter];
            filteredData[counter] = filteredData[index];
            filteredData[index] = temp;
        }
        return filteredData;
    })
});
