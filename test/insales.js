import chai    from 'chai';
import InSales from '../lib/api';

describe('InSales', () => {
  const should = chai.should();
  const assert = chai.assert;

  describe('Initialize without app id and app secret', () => {
    it('Should return "Missing app id"', () => {
      (() => {
        const insales = InSales();
      }).should.throw('Missing app id');
    });
  });

  describe('Initialize without app id', () => {
    it('Should return "Missing app id"', () => {
      (() => {
        const insales = InSales({
          secret: '12345'
        });
      }).should.throw('Missing app id');
    });
  });

  describe('Initialize without app secret', () => {
    it('Should return "Missing app secret"', () => {
      (() => {
        const insales = InSales({
          id: '12345'
        });
      }).should.throw('Missing app secret');
    });
  });

  describe('Initialize with app id and app secret', () => {
    it('Should return object', () => {
      const insales = InSales({
        id: '12345',
        secret: '12345'
      });
      assert.typeOf(insales, 'object');
    });
  });
});
