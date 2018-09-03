'use strict'

const robot = require('./robot')

exports.start = input => {
  if (input.length > 100) { throw Error('Input exceed 100 characters') }

  console.log('Martian robots - start')

  const instructionObjs = parseInput(input)
  const results = instructionObjs.map(_ => robot.run(_))

  console.log('Martian robots - output')
  console.log(generateOutput(results))

  return results
}

const generateOutput = results => {
  return results.map(_ => `${_.position.join(' ')} ${_.orientation}`).join('\n\n')
}

const parseInput = input => {
  const instructionSets = input.split('\n\n').map(_ => _.trim())

  const parseInstructionSet = instructionSet => {
    const lines = instructionSet.split('\n')
    const posLine = lines[0] ? lines[0].split(' ') : []

    return {
      position: [parseInt(posLine[0]), parseInt(posLine[1])], // Array [0, 0]
      orientation: posLine.slice(-1)[0], // String N, S, E, W
      movements: lines[1] ? lines[1].split('') : [] // Array ['L', 'R', 'F', ...]
    }
  }

  return instructionSets.map(_ => parseInstructionSet(_))
}
