var util = require('../src/util.js');
var read = require('../src/read.js');

describe('Reader tests', function() {
  it('reader existence', function() {
    expect(read).toBeDefined();
    expect(typeof read).toEqual('function');
  });

  it('read atoms', function() {
    expect(read('10')).toEqual(10);
    expect(read('-10.1')).toEqual(-10.1);
    expect(read('abc123+!')).toEqual(new util.Symbol('abc123+!'));
    expect(read('true')).toEqual(true);
    expect(read('false')).toEqual(false);
    expect(read('"false"')).toEqual('false');
    expect(read('\'abc123+!')).toEqual([new util.Symbol('quote'), new util.Symbol('abc123+!')]);
  });

  it('read lists', function() {
    expect(read('nil')).toEqual([]);
    expect(read('()')).toEqual([]);
    expect(read('((3)(3))')).toEqual([[3],[3]]);
  });
});
