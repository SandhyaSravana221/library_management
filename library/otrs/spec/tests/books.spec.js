const supertest = require('supertest');
const app = require('../../app');
const {startDBServer,stopDBServer}= require('../utils/server.js');



describe("Books api", () => {

    beforeAll(()=>{
   console.error("testing");     
    startDBServer();
    
    })
    afterAll(()=>{
        stopDBServer();
    })
    const req = supertest(app);
    // post /books
    // it("it is a test for add a book", async () => {
    //     const data = {
    //         title: "A book",
    //         author: "test author",
    //         description: "it is a book on testing",
    //         quantity: 123,
    //         available:12
            
    //     }
    //     const { status, body } = (await req.post("/books").send(data));
       
    //     expect(status).toBe(201);
    //     expect(body).toBeDefined();

    // });
    it("Add Book", async () => {
        const { status, body } = await request.post("/books").send({
          title: "Test Book",
          author: "Test Author",
          isbn: "9876543210",
          description: "Test Description",
          // quantity: 10,
          available: 0        
        });
    
        expect(status).toBe(201);
        expect(body).toBeDefined();
        expect(body.title).toBe("Test Book");
        expect(body.author).toBe("Test Author");
        expect(body.isbn).toBe("9876543210");
        expect(body.description).toBe("Test Description");
        // expect(body.quantity).toBe(10);
      });
    
    
    
      it("fetching all the book details",async ()=>{
        const data={
            title: "A book",
            author: "test author",
            description: "it is a book ",
            isbn: "9876543210", 
            quantity: 10,
            available: 1
          }
        const {status,body}=(await request.post("/books").send(data));
        expect(status).toBe(201);
        expect(body).toBeDefined();
        expect(body.title).toBe("Test Book");
        expect(body.author).toBe("Test Author");
        expect(body.isbn).toBe("9876543210");
        expect(body.description).toBe("Test Description");
        expect(body.quantity).toBe(10);
      });
    
    
      it("Get book by id",async ()=>{
        const data={
          title: "A book",
          author: "test author",
          description: "it is a book",
          isbn: "9876543210", 
          quantity: 10,
          available: 1
        }
      const {status,body}=(await request.post("/books").send(data));
      expect(status).toBe(201);
      expect(body).toBeDefined();
      expect(body.title).toBe("Test Book");
      expect(body.author).toBe("Test Author");
      expect(body.isbn).toBe("9876543210");
      expect(body.description).toBe("Test Description");
      expect(body.quantity).toBe(10);
    
    })
})