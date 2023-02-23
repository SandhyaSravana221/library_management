const request = require('supertest');
const app = require('../../app');  
describe('Test Loan Endpoints', () => {
  let loanId;

  // Test GET /loans
  it('test for list of all loans', async () => {
    const response = await request(app).get('/loans');
    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
    expect(Array.isArray(response.body)).toBe(true);
  });

  // Test POST /loans
  it('test to add a new loan detail to the library', async () => {
    const loanData = {
      userId: 1,
      bookId: 1,
      dueDate: '2023-02-28'
    };

    const response = await request(app)
      .post('/loans')
      .send(loanData);

    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('userId', loanData.userId);
    expect(response.body).toHaveProperty('bookId', loanData.bookId);
    expect(response.body).toHaveProperty('dueDate', loanData.dueDate);

    loanId = response.body.id;
  });

  // Test GET /loans/{loanId}
  it('test to return loan details by ID', async () => {
    const response = await request(app).get(`/loans/${loanId}`);
    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
    expect(response.body).toHaveProperty('id', loanId);
    expect(response.body).toHaveProperty('userId', 1);
    expect(response.body).toHaveProperty('bookId', 1);
    expect(response.body).toHaveProperty('dueDate', '2023-02-28');
  });

  // Test POST /loans/{loanId}
  it('should update a loan by ID', async () => {
    const loanData = {
      userId: 1,
      bookId: 2,
      dueDate: '2023-03-07'
    };

    const response = await request(app)
      .post(`/loans/${loanId}`)
      .send(loanData);

    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
    expect(response.body).toHaveProperty('id', loanId);
    expect(response.body).toHaveProperty('userId', loanData.userId);
    expect(response.body).toHaveProperty('bookId', loanData.bookId);
    expect(response.body).toHaveProperty('dueDate', loanData.dueDate);
  });

  // Test DELETE /loans/{loanId}
  it('should delete a loan by ID', async () => {
    const response = await request(app).delete(`/loans/${loanId}`);
    expect(response.status).toBe(204);
    expect(response.type).toBe('');
  });
});
