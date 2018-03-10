import chai    from 'chai';
import InSales from '../lib/api';

describe('Account', () => {
  const should = chai.should();
  const insales = new InSales({
    id: '12345',
    secret: '12345'
  });
  describe('insales.getAccount', () => {
    it('Should return object with property city equal Москва', () => {
      return insales.getAccount({
        token: '12345',
        url: 'private-d164-insales.apiary-mock.com'
      }).then(response => {
        return should.equal(response.data.city, 'Москва');
      });
    });
  });
});
