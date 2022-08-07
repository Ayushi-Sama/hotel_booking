import Model, { attr } from '@ember-data/model';

export default class BookingModel extends Model {

    @attr img;
    @attr name;
    @attr price;
    @attr distance;
    @attr date;
    @attr arrival;
    @attr return;
    @attr dome;
    @attr title;
    @attr double;
    @attr service;
    

    // @attr title;
    // @attr owner;
    // @attr city;
    // @attr location;
    // @attr category;
    // @attr image;
    // @attr bedrooms;
    // @attr description;
    // @attr comments;
  

}
