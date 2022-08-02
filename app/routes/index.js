import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
     @service store;
    // model() {
    //     return this.store.findAll('booking');
    //     }
    async model() {
        return this.store.findAll('booking','icon');
        this.store.findAll('icon');
    //     return {
    //       title: 'Grand Old Mansion',
    //       "attributes": {
    //   "title": "Grand Old Mansion",
    //   "owner": "Veruca Salt",
    //   "city": "San Francisco",
    //       location: {
    //         lat: 37.7749,
    //         lng: -122.4194,
    //       },
    //       category: 'Estate',
    //       type: 'Standalone',
    //       bedrooms: 15,
    //       image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
    //       description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.',
    //     }
    // };
        
    // let response = await fetch('/api/bookings.json');
    // let { data } = await response.json();

    // return data.map((model) => {
    //   let { id, attributes } = model;
    //   let type;

    //   if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
    //     type = 'Community';
    //   } else {
    //     type = 'Standalone';
    //   }

    //   return { id, type, ...attributes };
    // });
  }
}