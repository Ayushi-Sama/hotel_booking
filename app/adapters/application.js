import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  namespace = 'api';
//   urlForFindAll(modelName,snapshot){
//     return 'api/bookings.json';
//   }
  

  buildURL(...args) {
    return `${super.buildURL(...args)}.json`;
  }
}
