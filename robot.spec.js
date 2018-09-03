'use strict'

const robot = require('./robot')
const expect = require('chai').expect

describe.only('Robot run', () => {
  it('Test the execution of a single instruction object', () => {
    const instructionObj = {
      position: [0, 0],
      orientation: 'N',
      movements: ['L', 'L', 'F']
    }
    const validation = robot.run(instructionObj)
    expect(validation).to.eql({ position: [0, -1], orientation: 'S' })
  })
})
