// const { expect } = require('chai');
// const session = require('supertest-session');
// const app = require('../../src/app.js');
// const { conn } = require('../../src/db.js');
// const validator = require('validator');


// const agent = session(app);

// const recipe = {
//     name: 'Milanesa a la napolitana',
//     summary: 'valid summary',
// };

// describe('Post route', () => {

//     before(() => conn.authenticate()
//     .catch((err) => {
//         console.error('Unable to connect to the database:', err);
//     }));

//     beforeEach(() => conn.sync({ force: true })
//     );

//     describe('POST /recipe', () => {
//         xit('should get 200', async () => {
//         await agent.post('/recipe').send(recipe).expect(200)
//         });

//         xit('should responde with a json element', async () => {
//         await agent.post('/recipe').send(recipe).expect('Content-Type', /json/)
//         });

//         xit('should responde with the recipe created', async () => {
//             await agent.post('/recipe').send(recipe)
//             .expect(function(res) {
//                 expect(res.body.name).to.deep.equal(recipe.name)
//             })
//         });

//         xit('should add a valid id', async () => {
//             await agent.post('/recipe').send(recipe)
//             .expect(function(res) {
//                 expect(validator.isUUID(res.body.id)).to.be.true
//             })
//         });

//         xit('should set rating/health_rating to -1 if not given', async () => {
//             await agent.post('/recipe').send(recipe)
//             .expect(function(res) {
//                 expect(res.body.rating).to.equal(-1)
//                 expect(res.body.health_rating).to.equal(-1)
//             })
//         });
        
//         xit('should set steps/types to [] if not given', async () => {
//             await agent.post('/recipe').send(recipe)
//             .expect(function(res) {
//                 expect(res.body.steps).to.deep.equal([])
//                 expect(res.body.types).to.deep.equal([])
//             })
//         });
//     });
// });