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

// GET /api/materials
describe('GET /api/materials', () => {
  it('should return a status code of 200, a status of success, message and array of materials', async () => {
    const response = await request.get('/api/materials').set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status');
    expect(response.body.status).toBe('success');
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('materials');
    expect(Array.isArray(response.body.materials)).toBe(true);
  });
});

// POST /api/materials
describe('POST /api/materials', () => {
  it('should return a status code of 201, a status of success, message and a material', async () => {
    const response = await request.post('/api/materials').set('Authorization', `Bearer ${token}`).send({
      name: 'All Natural Beeswax',
      stock: 32,
      minStock: 10,
      unitId: '47cba104-5bbd-4b5b-af25-e63be0ebaf20',
      unitCost: 2.32,
      sku: 'ANB',
      categoryId: '02e585a2-9f3f-457e-b5b3-5887af0a2aba',
      supplierId: 'a210ae06-ade4-400a-810a-292b4e30d54e',
      userId: 'e05b897e-eb9d-4345-8845-666450c6b6be',
    });

    id = response.body.material.id;

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('status');
    expect(response.body.status).toBe('success');
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('material');
    expect(response.body.material.name).toBe('All Natural Beeswax');
  });
});

// GET /api/materials/:id
describe('GET /api/materials/:id', () => {
  it('should return a status code of 200, a status of success, message and a material', async () => {
    const response = await request.get(`/api/materials/${id}`).set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status');
    expect(response.body.status).toBe('success');
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('material');
    expect(response.body.material.name).toBe('All Natural Beeswax');
  });
});

// PUT /api/materials/:id
describe('PUT /api/materials/:id', () => {
  it('should return a status code of 200, a status of success, message and a material', async () => {
    const response = await request.put(`/api/materials/${id}`).set('Authorization', `Bearer ${token}`).send({
      stock: 35,
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status');
    expect(response.body.status).toBe('success');
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('material');
    expect(response.body.material.stock).toBe(35);
  });
});

// DELETE /api/materials/:id
describe('DELETE /api/materials/:id', () => {
  it('should return a status code of 204', async () => {
    const response = await request.delete(`/api/materials/${id}`).set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(204);
  });
});
