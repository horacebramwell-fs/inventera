const app = require('../');
const supertest = require('supertest');
const request = supertest(app);

// GET /api/boards
describe('GET /api/boards', () => {
  it('should return a status code of 200, a status of success, message and array of boards', async () => {
    const response = await request.get('/api/boards');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status');
    expect(response.body.status).toBe('success');
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('boards');
    expect(Array.isArray(response.body.boards)).toBe(true);
  });
});
