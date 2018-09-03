'use strict'

const app = require('./app')
const expect = require('chai').expect

describe('Try some instructions', () => {
  it('should throw an error if the length of the instructions set is more that 100 characters', () => {
    expect(_ => app.start('invalidInputinvalidInputinvalidInputinvalidInputinvalidInputinvalidInputinvalidInputinvalidInputinvalidInputinvalidInputinvalidInputinvalidInput'))
      .to.throw('Input exceed 100 characters')
  })

  it('should skip invalid inputs', () => {
    const input = ``
    const output = app.start(input)
    expect(output).to.eql([])
  })

  it('should skip input instructions if no movements string is provided', () => {
    const input = `0 0 N`
    const output = app.start(input)
    expect(output).to.eql([])
  })

  it('should return the same position if the movements string does not contain F', () => {
    const input = `0 0 N\nRLRLRLR`
    const output = app.start(input)[0]
    expect(output.position).to.eql([0, 0])
  })

  it('should return the orientation if the movements string does not contain R or L', () => {
    const input = `0 0 N\nFFFFFF`
    const output = app.start(input)[0]
    expect(output.position).to.eql([0, 6])
    expect(output.orientation).to.eql('N')
  })

  it('should return the correct position for this sequence of movements - 1', () => {
    const input = `0 0 N\nRF`
    const output = app.start(input)[0]
    expect(output.position).to.eql([1, 0])
    expect(output.orientation).to.eql('E')
  })

  it('should return the correct position for this sequence of movements - 2', () => {
    const input = `0 0 N\nRFLF`
    const output = app.start(input)[0]
    expect(output.position).to.eql([1, 1])
  })
})
