const request = require("supertest");
const app = require("../index");
const fs = require("fs");


// "describe" es una forma de enlistar y agrupar un conjunto de pruebas. En este caso, lo hacemos por endpoint
describe("Testing health check endpoint", () => {
    // Podemos usar "it" en lugar de test, pero funcionan igual
    test("GET /api/hello", (done) => {
        request(app)
            .get("/api/hello")
            .expect("Content-Type", /json/)
            .expect(200)
            .expect((res) => {
                res.body.message = "Hello from server side!";
            })
            .end((err, res) => {
                if (err) return done(err);
                return done();
            });
    });
});

// "describe"
describe("Testing pet object GET/POST endpoints", () => {
    // Primero probamos el GET
    test("GET /api/pet", (done) => {
        request(app)
            .get("/api/pet")
            .expect("Content-Type", /json/)
            .expect(200)
            .expect((res) => {
                res.body[0].name = "barry";
                res.body[1].name = "nezuko";
            })
            .end((err, res) => {
                if (err) return done(err);
                return done();
            });
    });
    // Después el POST. En este caso, nuestro endpoint no regresa nada más que un 201.
    test("POST /api/pet", (done) => {
        request(app)
            .post("/api/pet")
            .expect(201)
            .end((err, res) => {
                if (err) return done(err);
                return done();
            });
    });
});