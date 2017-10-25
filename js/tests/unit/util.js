$(function () {
  'use strict'

  QUnit.module('util')

  QUnit.test('Util.getSelectorFromElement should return the correct element', function (assert) {
    assert.expect(2)
    var $el = $('<div data-target="body"></div>').appendTo($('#qunit-fixture'))
    assert.strictEqual(Util.getSelectorFromElement($el[0]), 'body')

    // not found element
    var $el2 = $('<div data-target="#fakeDiv"></div>').appendTo($('#qunit-fixture'))
    assert.strictEqual(Util.getSelectorFromElement($el2[0]), null)
  })

  QUnit.test('Util.typeCheckConfig should thrown an error when a bad config is passed', function (assert) {
    assert.expect(1)
    var namePlugin = 'collapse'
    var defaultType = {
      toggle : 'boolean',
      parent : '(string|element)'
    }
    var config = {
      toggle: true,
      parent: 777
    }

    try {
      Util.typeCheckConfig(namePlugin, config, defaultType)
    } catch (e) {
      assert.strictEqual(e.message, 'COLLAPSE: Option "parent" provided type "number" but expected type "(string|element)".')
    }
  })
})
