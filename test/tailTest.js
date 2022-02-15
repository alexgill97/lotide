const { assert } = require("chai");
const tail = require('../tail');

describe("#tail", () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  
  it("returns ['Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"])
  });

  it("returns length = 2", () => {
    assert.deepEqual(tail(words).length, 2)
  });

});


