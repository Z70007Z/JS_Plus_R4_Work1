import infoHealth from '../index';

// test('', () => {
//     const result = infoHealth(50);
//     expect(4).tobe(2);
// });

const dataList = [
  ['Green', 60, 'healthy'],
  ['yellow', 40, 'wounded'],
  ['Red', 10, 'critical'],
];

const health = test.each(dataList);

health('Testing statushealth %s levelhealth %i character', (statushealth, levelhealth, expected) => {
  const result = infoHealth(statushealth, levelhealth);
  expect(result).toBe(expected);
});
