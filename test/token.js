import should from 'should';
import InSales from '../';
const insales = InSales({
  id: '12345',
  secret: '12345'
});

describe('Token', () => {
  describe('insales.token', () => {
    it('Should return md5(string + secret)', () => {
      should(insales.token('12345')).be.equal('8cfa2282b17de0a598c010f5f0109e7d');
    });
  });
});
