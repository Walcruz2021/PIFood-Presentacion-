// const { TypeDiet, conn } = require('../../src/db.js');
// const { expect } = require('chai');
// var chaiAsPromised = require("chai-as-promised");
// var chai = require("chai");

// chai.use(chaiAsPromised);
// chai.should()

// describe('Models', () => {
//   before(() => conn.authenticate()
//     .catch((err) => {
//       console.error('Unable to connect to the database:', err);
//     }));

//   describe('TypeDiet', () => {
//     beforeEach(() => TypeDiet.sync({ force: true }));
//     //Testing Tyoe Model:
//     describe('TypeDiet atributes', () => {
//       describe('name', () => {
//           xit('should be rejected if name is null', () => {
//             return TypeDiet.create({})
//               .should.be.rejected;
//           });
//           xit('should work when its a valid name', () => {
//             return TypeDiet.create({name: 'Ligth'})
//               .should.be.fulfilled;
//           });
//       });

//       describe('id', () => {
//           xit('should have an id after its created', async () => {
//             const newType = await TypeDiet.create({name: 'Ligth'})
//               return expect(newType.id).not.to.be.null;
//           });
//       });
//     })
//   })
// })
