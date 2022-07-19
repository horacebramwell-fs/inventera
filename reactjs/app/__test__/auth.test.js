const app = require('../');
const supertest = require('supertest');
const request = supertest(app);

// POST /api/auth/login
describe('POST /api/auth/login', () => {
  it('should return a status code of 200, a status of success, isLoggedIn: true, and a token', async () => {
    const response = await request.post('/api/auth/login').send({
      email: 'johnmart@email.com',
      password: 'Johnmart123!',
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status');
    expect(response.body.status).toBe('success');
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('token');
  });
});

// POST /api/auth/register
// describe('POST /api/auth/register', () => {
//   it('should return a status code of 201, a status of success, isLoggedIn: true, and a token', async () => {
//     const response = await request.post('/api/auth/register').send({
//       name: 'Thomas Rhett',
//       email: 'thomasrhett@email.com',
//       password: 'ThomasRhett123!',
//       businessName: 'Thomas Rhett LLC',
//       website: 'www.thomasrhett.com',
//     });

//     expect(response.status).toBe(201);
//     expect(response.body).toHaveProperty('status');
//     expect(response.body.status).toBe('success');
//     expect(response.body).toHaveProperty('message');
//     expect(response.body).toHaveProperty('token');
//   });
// });
