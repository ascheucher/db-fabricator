const assert = require('chai').assert;
const MysqlConstraintsHelper = require('../src/helpers/mysql-constraints.helper');

describe('Tests for MySQL Adapter constraints generation', () => {
  it('should generate correct constraint for strict equals number', () => {
    assert.equal(MysqlConstraintsHelper.convertToRightPartOfConstraint(1), ' = 1');
  });

  it('should generate correct constraint for strict equals string', () => {
    assert.equal(MysqlConstraintsHelper.convertToRightPartOfConstraint('test string'), ' = \'test string\'');
  });

  it('should generate correct constraint for like', () => {
    assert.equal(MysqlConstraintsHelper.convertToRightPartOfConstraint({$like: '%a%'}), ' like \'%a%\'');
  });

  it('should generate correct constraint for gt', () => {
    assert.equal(MysqlConstraintsHelper.convertToRightPartOfConstraint({$gt: 1}), ' > 1');
  });

  it('should generate correct constraint for gte', () => {
    assert.equal(MysqlConstraintsHelper.convertToRightPartOfConstraint({$gte: 1}), ' >= 1');
  });

  it('should generate correct constraint for lt', () => {
    assert.equal(MysqlConstraintsHelper.convertToRightPartOfConstraint({$lt: 1}), ' < 1');
  });

  it('should generate correct constraint for lte', () => {
    assert.equal(MysqlConstraintsHelper.convertToRightPartOfConstraint({$lte: 1}), ' <= 1');
  });

  it('should generate correct constraint for ne number', () => {
    assert.equal(MysqlConstraintsHelper.convertToRightPartOfConstraint({$ne: 1}), ' <> 1');
  });

  it('should generate correct constraint for ne string', () => {
    assert.equal(MysqlConstraintsHelper.convertToRightPartOfConstraint({$ne: '1'}), ' <> \'1\'');
  });
});

// convertToRightPartOfConstraint