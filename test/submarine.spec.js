'use strict';
const expect = require('chai').expect,
  submarine = require('..');

describe('submarine', () => {

  var obj = {foo: 'bar', a: {b: {c: 'd'}}};

  it('simple use case', () => {
    expect(submarine(obj).foo.getOrElse('empty')).to.equal('bar');
  });
  it('some more depth', () => {
    expect(submarine(obj).a.b.c.getOrElse('empty')).to.equal('d');
  });
  it('not found', () => {
    expect(submarine(obj).bar.baz.getOrElse('empty')).to.equal('empty');
  });

});
