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

// GET /api/formulas
describe('GET /api/formulas', () => {
  it('should return a status code of 200, a status of success, message and array of formulas', async () => {
    const response = await request.get('/api/formulas').set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status');
    expect(response.body.status).toBe('success');
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('formulas');
    expect(Array.isArray(response.body.formulas)).toBe(true);
  });
});

// POST /api/formulas
describe('POST /api/formulas', () => {
  it('should return a status code of 201, a status of success, message and a formula', async () => {
    const response = await request.post('/api/formulas').set('Authorization', `Bearer ${token}`).send({
      name: '16oz Candle',
      containerSize: 16,
      containerFill: 14,
      fragranceLoad: 0.12,
      fragranceAmount: 1.68,
      waxAmount: 12.32,
      unitId: '61742218-bccb-4f32-89b0-d1622773a1b6',
      note: 'This is a test note',
      userId: 'e05b897e-eb9d-4345-8845-666450c6b6be',
    });

    id = response.body.formula.id;

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('status');
    expect(response.body.status).toBe('success');
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('formula');
    expect(response.body.formula.name).toBe('16oz Candle');
  });
});

// GET /api/formulas/:id
describe('GET /api/formulas/:id', () => {
  it('should return a status code of 200, a status of success, message and a formula', async () => {
    const response = await request.get(`/api/formulas/${id}`).set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status');
    expect(response.body.status).toBe('success');
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('formula');
    expect(response.body.formula.name).toBe('16oz Candle');
  });
});

// PUT /api/formulas/:id
describe('PUT /api/formulas/:id', () => {
  it('should return a status code of 200, a status of success, message and a formula', async () => {
    const response = await request.put(`/api/formulas/${id}`).set('Authorization', `Bearer ${token}`).send({
      name: '16 oz Candle',
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status');
    expect(response.body.status).toBe('success');
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('formula');
    expect(response.body.formula.name).toBe('16 oz Candle');
  });
});

// DELETE /api/formulas/:id
describe('DELETE /api/formulas/:id', () => {
  it('should return a status code of 204', async () => {
    const response = await request.delete(`/api/formulas/${id}`).set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(204);
  });
});
