const app = require('../');
const supertest = require('supertest');
const request = supertest(app);

// GET /api/units
describe('GET /api/units', () => {
  it('should return a status code of 200, a status of success, message and array of units', async () => {
    const response = await request.get('/api/units');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status');
    expect(response.body.status).toBe('success');
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('units');
    expect(Array.isArray(response.body.units)).toBe(true);
  });
});
