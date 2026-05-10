import request from 'supertest';
import { app } from '../app.js';
import collection1 from '../schemas/userschema.js';
import { cleardb, closedb, connectdb } from './db.setup.js';
describe("Auth test", () => {
    beforeAll(async () => await connectdb());
    afterEach(async () => await cleardb());
    afterAll(async () => await closedb());
    describe("register user in the db", () => {
        it("path 1 if body is missing it should fail", async () => {
            const response = await request(app).post("/apis/").send({
                name: "test user"
            });
            expect(response.status).toBe(400);
            expect(response.body.message).toBe("body not recived");
        });
        it("path 2 user registerd succesfully", async () => {
            const response = await request(app).post("/apis/").send({
                name: "test user",
                email: "t@gmail.com",
                password: "12345"
            });
            expect(response.status).toBe(200);
            expect(response.body.success).toBe(true);
            expect(response.body.message).toBe("user inserted succesfully");
            const finduseriddb = await collection1.findOne({ email: "t@gmail.com" });
            expect(finduseriddb).toBeTruthy();
            expect(finduseriddb?.name).toBe("test user");
            expect(finduseriddb?.password).not.toBe("12345");
        });
        it("path 3 crash handelinf like duplicate email", async () => {
            await collection1.create({
                name: "test",
                email: "t@gmail.com",
                password: "hashed"
            });
            const response = await request(app).post("/apis/").send({
                name: "test",
                email: "t@gmail.com",
                password: "12345"
            });
            expect(response.status).toBe(400);
            expect(response.body.success).toBe(false);
            expect(response.body.message).toBe("user registration failed");
        });
    });
});
//# sourceMappingURL=apitest.test.js.map