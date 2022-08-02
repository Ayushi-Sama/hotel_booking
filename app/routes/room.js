import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RoomRoute extends Route {
    @service store;
    async model(params) {
        return this.store.findAll('booking').then(results => results.filter((site) => {
            return site.get('id') === params.room_id;
        }))
    }
}
