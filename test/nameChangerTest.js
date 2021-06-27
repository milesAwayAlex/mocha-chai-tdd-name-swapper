import {expect} from 'chai';
import swap from '../index.js';

const cases = [
  [['an empty string when passed an empty string'], [''], ['']],
  [['a single name when passed a single name'], ['name'], ['name']],
  [
    ['a single name when passed a single name with extra spaces'],
    [' name '],
    ['name'],
  ],
  [
    ['a last-name, first-name when passed a first and last-name'],
    ['first last'],
    ['last, first'],
  ],
  [
    [
      'a last-name, first-name when passed a first and last-name with extra spaces around the names',
    ],
    [' first last'],
    ['last, first'],
  ],
  [['an empty string when passed a single honorific'], ['Dr. '], ['']],
  [
    ['honorific first-name when passed honorific first-name'],
    ['Dr. first'],
    ['Dr. first'],
  ],
  [
    [
      'a honorific last-name, first-name when passed honorific first-name last-name',
    ],
    ['Dr. first-name last-name'],
    ['Dr. last-name, first-name'],
  ],
  [
    [
      'a honorific last-name, first-name when passed honorific first-name last-name with extra spaces around the words',
    ],
    [' Dr. first-name last-name '],
    ['Dr. last-name, first-name'],
  ],
  [['throw an error when name is undefined'], [undefined], ['throw']],
];

describe('swapNames', () => {
  cases.forEach(c => {
    it(`returns ${c[0][0]}`, () => {
      if (c[2][0] === 'throw') {
        expect(() => swap(c[1][0])).to.throw();
      } else {
        expect(swap(c[1][0])).to.equal(c[2][0]);
      }
    });
  });
});
