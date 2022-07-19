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

// GET /api/suppliers
describe('GET /api/suppliers', () => {
  it('should return a status code of 200, a status of success, message and array of suppliers', async () => {
    const response = await request.get('/api/suppliers').set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status');
    expect(response.body.status).toBe('success');
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('suppliers');
    expect(Array.isArray(response.body.suppliers)).toBe(true);
  });
});

// POST /api/suppliers
describe('POST /api/suppliers', () => {
  it('should return a status code of 201, a status of success, message and a supplier', async () => {
    const response = await request.post('/api/suppliers').set('Authorization', `Bearer ${token}`).send({
      name: 'Northwood Candle Supply',
      userId: 'e05b897e-eb9d-4345-8845-666450c6b6be',
    });

    id = response.body.supplier.id;

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('status');
    expect(response.body.status).toBe('success');
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('supplier');
    expect(response.body.supplier.name).toBe('Northwood Candle Supply');
  });
});

// GET /api/suppliers/:id
describe('GET /api/suppliers/:id', () => {
  it('should return a status code of 200, a status of success, message and a supplier', async () => {
    const response = await request.get(`/api/suppliers/${id}`).set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status');
    expect(response.body.status).toBe('success');
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('supplier');
    expect(response.body.supplier.name).toBe('Northwood Candle Supply');
  });
});

// PUT /api/suppliers/:id
describe('PUT /api/suppliers/:id', () => {
  it('should return a status code of 200, a status of success, message and a supplier', async () => {
    const response = await request.put(`/api/suppliers/${id}`).set('Authorization', `Bearer ${token}`).send({
      name: 'Northwood Candle Supply Co.',
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status');
    expect(response.body.status).toBe('success');
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('supplier');
    expect(response.body.supplier.name).toBe('Northwood Candle Supply Co.');
  });
});

// DELETE /api/suppliers/:id
describe('DELETE /api/suppliers/:id', () => {
  it('should return a status code of 204', async () => {
    const response = await request.delete(`/api/suppliers/${id}`).set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(204);
  });
});
