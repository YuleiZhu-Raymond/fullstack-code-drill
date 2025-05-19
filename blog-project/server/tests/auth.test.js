const request = require("supertest");
const app = require('../index');
const mongoose = require('mongoose');


describe('Auth API', () => {
    it('should register a user successfully', async () => {
        const res = await request(app)
            .post('/api/register')
            .send({ username: 'testuser', password: '123456' });

        expect(res.statusCode).toBe(201);
        expect(res.body.user.username).toBe('testuser');
        expect(res.body.token).toBeDefined();
    });

    afterAll(async () => {
        await mongoose.disconnect();
    })
});