import expect from 'expect';
import pensionCalculator from '../sut';

describe('The pension calculator', () => {
  describe('returns 0', () => {
    it('if the age is lower than 65', () => {
      const paidAmount = 150000;
      const age = 64;

      const pension = pensionCalculator(paidAmount, age);

      expect(pension).toBe(0);
    });
    it('if the age is higher than 150', () => {
      const paidAmount = 150000;
      const age = 151;

      const pension = pensionCalculator(paidAmount, age);

      expect(pension).toBe(0);
    });
    it('if the paid amount is 0', () => {
      const paidAmount = 0;
      const age = 75;

      const pension = pensionCalculator(paidAmount, age);

      expect(pension).toBe(0);
    });
  });
  describe('returns the calculated amount for the age', function() {
    it('splitting the amount into the remaining years until the age of 151 (rounded up)', function() {
      const paidAmount = 100000;
      const age = 75;

      const pension = pensionCalculator(paidAmount, age);

      expect(pension).toBe(1315.79);
    });
  });
});
