const app = require('../');
const supertest = require('supertest');
const request = supertest(app);

let token;

beforeAll(async () => {
  const response = await request.post('/api/auth/login').send({
    email: 'thomasrhett@email.com',
    password: 'ThomasRhett123!',
  });

  console.log(response.body);

  token = response.body.token;
});

// GET /api/user
describe('GET /api/user', () => {
  it('should return a status code of 200, a status of success, message and a user', async () => {
    const response = await request.get('/api/user').set('Authorization', `Bearer ${token}`);

    console.log(response.body);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status');
    expect(response.body.status).toBe('success');
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('user');
    expect(response.body.user.name).toBe('Thomas');
  });
});

// PUT /api/user
describe('PUT /api/user', () => {
  it('should return a status code of 200, a status of success, message and a user', async () => {
    const response = await request.put('/api/user').set('Authorization', `Bearer ${token}`).send({
      name: 'Thomas',
    });

    console.log(response.body);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status');
    expect(response.body.status).toBe('success');
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('user');
    expect(response.body.user.name).toBe('Thomas');
  });
});

// DELETE /api/user
// describe('DELETE /api/user', () => {
//   it('should return a status code of 200, a status of success, message and a user', async () => {
//     const response = await request.delete('/api/user').set('Authorization', `Bearer ${token}`);

//     console.log(response.body);

//     expect(response.status).toBe(200);
//     expect(response.body).toHaveProperty('status');
//     expect(response.body.status).toBe('success');
//     expect(response.body).toHaveProperty('message');
//   });
// });
