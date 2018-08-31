'use strict'

const app = require('./app');
const samples = require('./samples');
const expect = require('chai').expect;

describe('Try some instructions', () => {
  it('should throw an error if the length of the instructions set is more that 100 characters', () => {
    expect(_ => app.start('invalidInputinvalidInputinvalidInputinvalidInputinvalidInputinvalidInputinvalidInputinvalidInputinvalidInputinvalidInputinvalidInputinvalidInput'))
    .to.throw('Input exceed 100 characters');
  })

  it('should return the same position if an empty movements string is provided', () => {
    const input = `0 0 N`;
    const validation = app.start(input)[0];
    expect(validation.position).to.eql([0,0]);
    expect(validation.orientation).to.eql('N');
  })

  it('should return the same position if the movements string does not contain F', () => {
    const input = `0 0 N\nRLRLRLR`;
    const validation = app.start(input)[0];
    expect(validation.position).to.eql([0,0]);
  })

  it('should return the orientation if the movements string does not contain R or L', () => {
    const input = `0 0 N\nFFFFFF`;
    const validation = app.start(input)[0];
    expect(validation.position).to.eql([0,6]);
    expect(validation.orientation).to.eql('N');
  })

  it('should return the correct position for this sequence of movements - 1', () => {
    const input = `0 0 N\nRF`;
    const validation = app.start(input)[0];
    expect(validation.position).to.eql([1,0]);
    expect(validation.orientation).to.eql('E');
  })

  it('should return the correct position for this sequence of movements - 2', () => {
    const input = `0 0 N\nRFLF`;
    const validation = app.start(input)[0];
    expect(validation.position).to.eql([1,1]);
  })

})
