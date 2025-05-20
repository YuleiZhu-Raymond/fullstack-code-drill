// Ensure environment variables are loaded before anything else. If not, DB connection and JWT may fail.
require('dotenv').config();
const request = require("supertest");
const app = require('../index');
const mongoose = require('mongoose');
const User = require('../models/User'); // Import User model for test data cleanup

beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    // Clean up test user before running registration test to avoid duplicate user errors
    await User.deleteOne({ username: 'testuser' });
});

describe('Auth API', () => {
    it('should register a user successfully', async () => {
        const res = await request(app)
            .post('/api/register')
            .send({ username: 'testuser', password: '123456' });

        // Log the response for debugging if test fails
        console.log('register response:', res.body);

        // Expect 201 Created. If user already exists, will get 400 instead.
        expect(res.statusCode).toBe(201);
        // Check returned username
        expect(res.body.user.username).toBe('testuser');
        // Token must be present in response. If not, registration logic is missing token return.
        expect(res.body.token).toBeDefined();
    }, 20000); // Increase timeout for slow DB or server

    afterAll(async () => {
        // Clean up test user after test run
        await User.deleteOne({ username: 'testuser' });
        await mongoose.disconnect();
    })
});