const app = require('../');
const supertest = require('supertest');
const request = supertest(app);

let token;
let id;

beforeAll(async () => {
  const response = await request.post('/api/auth/login').send({
    email: 'johnmart@email.com',
    password: 'Johnmart123!',
  });

  token = response.body.token;
});

// GET /api/productions
describe('GET /api/productions', () => {
  it('should return a status code of 200, a status of success, message and array of productions', async () => {
    const response = await request.get('/api/productions').set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status');
    expect(response.body.status).toBe('success');
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('productions');
    expect(Array.isArray(response.body.productions)).toBe(true);
  });
});

// POST /api/productions
describe('POST /api/productions', () => {
  it('should return a status code of 201, a status of success, message and a production', async () => {
    const response = await request.post('/api/productions').set('Authorization', `Bearer ${token}`).send({
      name: 'Astrological Collection',
      quantity: 32,
      status: 0,
      dueDate: '2022-08-08T00:00:00.000Z',
      userId: 'e05b897e-eb9d-4345-8845-666450c6b6be',
      productionBoardId: '6249ef1c-c110-4070-bb11-5ede29a9979c',
    });

    id = response.body.production.id;

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('status');
    expect(response.body.status).toBe('success');
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('production');
    expect(response.body.production.name).toBe('Astrological Collection');
  });
});

// GET /api/productions/:id
describe('GET /api/productions/:id', () => {
  it('should return a status code of 200, a status of success, message and a production', async () => {
    const response = await request.get(`/api/productions/${id}`).set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status');
    expect(response.body.status).toBe('success');
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('production');
    expect(response.body.production.name).toBe('Astrological Collection');
  });
});

// PUT /api/productions/:id
describe('PUT /api/productions/:id', () => {
  it('should return a status code of 200, a status of success, message and a production', async () => {
    const response = await request.put(`/api/productions/${id}`).set('Authorization', `Bearer ${token}`).send({
      status: 1,
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status');
    expect(response.body.status).toBe('success');
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('production');
    expect(response.body.production.status).toBe(1);
  });
});

// DELETE /api/productions/:id
describe('DELETE /api/productions/:id', () => {
  it('should return a status code of 204', async () => {
    const response = await request.delete(`/api/productions/${id}`).set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(204);
  });
});
