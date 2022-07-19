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

// GET /api/categories
describe('GET /api/categories', () => {
  it('should return a status code of 200, a status of success, message and array of categories', async () => {
    const response = await request.get('/api/categories').set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status');
    expect(response.body.status).toBe('success');
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('categories');
    expect(Array.isArray(response.body.categories)).toBe(true);
  });
});

// POST /api/categories
describe('POST /api/categories', () => {
  it('should return a status code of 201, a status of success, message and a category', async () => {
    const response = await request.post('/api/categories').set('Authorization', `Bearer ${token}`).send({
      name: 'Glitter',
    });

    id = response.body.category.id;

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('status');
    expect(response.body.status).toBe('success');
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('category');
    expect(response.body.category.name).toBe('Glitter');
  });
});

// GET /api/categories/:id
describe('GET /api/categories/:id', () => {
  it('should return a status code of 200, a status of success, message and a category', async () => {
    const response = await request.get(`/api/categories/${id}`).set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status');
    expect(response.body.status).toBe('success');
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('category');
    expect(response.body.category.name).toBe('Glitter');
  });
});

// PUT /api/categories/:id
describe('PUT /api/categories/:id', () => {
  it('should return a status code of 200, a status of success, message and a category', async () => {
    const response = await request.put(`/api/categories/${id}`).set('Authorization', `Bearer ${token}`).send({
      name: 'Glitter',
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status');
    expect(response.body.status).toBe('success');
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('category');
    expect(response.body.category.name).toBe('Glitter');
  });
});

// DELETE /api/categories/:id
describe('DELETE /api/categories/:id', () => {
  it('should return a status code 204', async () => {
    const response = await request.delete(`/api/categories/${id}`).set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(204);
  });
});
