const { Country, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Country model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  describe('Country model', async () => {
    
    it('should contain atributes: alpha3Code, name, flags, continent, region, capital and area',
    async() =>{
      const country = await Country.findOne({
        where: {alpha3Code: 'ARG'}
      })    
      expect(country.dataValues).to.have.own.property('alpha3Code');
      expect(country.dataValues).to.have.own.property('name');
      expect(country.dataValues).to.have.own.property('flags');
      expect(country.dataValues).to.have.own.property('continent');
      expect(country.dataValues).to.have.own.property('region');
      expect(country.dataValues).to.have.own.property('capital');
      expect(country.dataValues).to.have.own.property('area');
        })
    it('atribute name and capital must be a string', async ()=>{
        const country = await Country.findOne(
            {
                where:{alpha3Code: 'ARG'}
            }
        )
        expect(country.dataValues.name).to.be.a('string');
    })
    it('atribute capital must be a string', async ()=>{
        const country = await Country.findOne(
            {
                where:{alpha3Code: 'ARG'}
            }
        )
        expect(country.dataValues.capital).to.be.a('string');
    })
})
});
