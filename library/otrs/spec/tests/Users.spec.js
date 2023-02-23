const request = require('supertest');
const app = require('../../app');

describe('Users API', () => {

  // Test GET  
  describe('GET /users', () => {
    it('test to get all the users', async () => {
      const res = await request(app)
        .get('/users')
        .expect(200);
      expect(res.body).toBeInstanceOf(Array);
    });
  });

  // Test POST  
  describe('POST /users', () => {
    it('add a new user', async () => {
      const newUser = {
        name: 'sravana',
        email: 'sravana@example.com',
        age: 22,
      };
      const res = await request(app)
        .post('/users')
        .send(newUser)
        .expect(200);
      expect(res.body.name).toBe(newUser.name);
      expect(res.body.email).toBe(newUser.email);
      expect(res.body.age).toBe(newUser.age);
    });
  });

  // Test GET  
  describe('GET /users/:userid', () => {
    it('test to get a user by ID', async () => {
      const res = await request(app)
        .get('/users/1')
        .expect(200);
      expect(res.body.id).toBe(1);
    });

     
  });

  // Test POST  
  describe('POST /users/:userid', () => {
    it('update a user by ID', async () => {
      const updatedUser = {
        name: 'John Smith',
        email: 'johnsmith@example.com',
        age: 30,
      };
      const res = await request(app)
        .post('/users/1')
        .send(updatedUser)
        .expect(200);
      expect(res.body.name).toBe(updatedUser.name);
      expect(res.body.email).toBe(updatedUser.email);
      expect(res.body.age).toBe(updatedUser.age);
    });

     
       
  });

  // Test DELETE  
  describe('DELETE /users/:userid', () => {
    it(' delete a user by ID', async () => {
      const res = await request(app)
        .delete('/users/1')
        .expect(204);
    });

     
  });
});
