import chai    from 'chai';
import InSales from '../lib/api';

describe('Token', () => {
  const should = chai.should();
  const insales = InSales({
    id: '12345',
    secret: '12345'
  });
  describe('insales.token', () => {
    it('Should return md5(string + secret)', () => {
      insales.token('12345').should.equal('8cfa2282b17de0a598c010f5f0109e7d');
    });
  });
});
