import should from 'should';
import InSales from '../';
const insales = InSales({
  id: '12345',
  secret: '12345'
});

describe('Account', () => {
  describe('insales.getAccount', () => {
    it('Should return object with property city equal Москва', () => {
      insales.getAccount({
        token: '12345',
        url: 'private-anon-c0a2409fd-insales.apiary-mock.com'
      }).then(response => {
        should(response.data.account.city).be.equal('Москва');
      });
    });
  });
});
