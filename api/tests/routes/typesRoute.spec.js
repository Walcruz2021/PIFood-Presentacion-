// const { expect } = require('chai');
// const session = require('supertest-session');
// const app = require('../../src/app.js');
// const { TypeDiet, conn } = require('../../src/db.js');
// //const { typesArray } = require('../../src/utils/constants')

// const agent = session(app);

// describe('Recipe routes', () => {

//     before(() => conn.authenticate()
//     .catch((err) => {
//         console.error('Unable to connect to the database:', err);
//     }));

//     beforeEach(() => conn.sync({ force: true })
//         .then(() => {
//             typesArray.forEach(async (type) => {
//                 await TypeDiet.create({
//                     name: TypeDiet,
//                 });
//             })
//         })
//     );

//     describe('GET /types', () => {
//         xit('should get 200', async () => {
//             await agent.get('/types').expect(200)
//         });

//         xit('should responde with a json element', async () => {
//             await agent.get('/types').expect('Content-Type', /json/)
//         });
//     });
// });