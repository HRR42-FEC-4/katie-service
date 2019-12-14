const db = require('../db/index');
const Review = require('../db/models/Reviews');
const app = require('../server/app');
const request = require('supertest');

describe('GET /reviews/:productId', () => {
  it('gets the reviews from the database for a given id', done => {
    let randomId = Math.floor(Math.random() * 100) + 1;
    let dbquery;
    Review.findAll({
      raw: true,
      where: {
        product_id: randomId
      },
      order: [
        ['date_created', 'DESC'],
      ]
    })
    .then(data => {
      dbquery = data;
    })

    return request(app).get('/reviews/' + randomId)
    .then(response => {
      expect(response.body);
      done();
    })
  })
});

describe('GET /reviews/:productId/:rating', () => {
  it('gets the reviews of a given rating for a given id', done => {
    let randomId = Math.floor(Math.random() * 100) + 1;
    let randomRating = Math.floor(Math.random() * 5) + 1;

    return request(app).get('/reviews/' + randomId + randomRating)
    .then(response => {
      expect(response.body);
      done();
    })
  })
});


describe('PATCH /reviews/reviewId/:thumb', () => {
  it('increments the number of thumbs up in the database', done => {
    let randomId = Math.floor(Math.random() * 100) + 1;

    return request(app).patch('/reviews/' + randomId + '/thumbs_up')
    .then(response => {
      expect(response.statusCode).toEqual(200);
      done();
    })
  })

  it('increments the number of thumbs down in the database', done => {
    let randomId = Math.floor(Math.random() * 100) + 1;
      return request(app).patch('/reviews/' + randomId + '/thumbs_down')
      .then(response => {
        expect(response.statusCode).toEqual(200);
        done();
      })
  })
});
