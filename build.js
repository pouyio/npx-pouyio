'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('            Vicente Ortiz'),
  handle: chalk.green('pouyio'),
  work: chalk.white.italic('   Fullstack Javascript Developer at Lansweeper'),
  github: chalk.gray('https://github.com/') + chalk.red('pouyio'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.red('vicenteogc'),
  twitter: chalk.gray('https://twitter.com/') + chalk.red('pouyio'),
  web: chalk.blue('https://vicenteortiz.me'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelWeb: chalk.white.bold('        Web:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} ▵ ${data.handle}`
const working = `${data.work}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const webing = `${data.labelWeb}  ${data.web}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline + // data.name + data.handle
               working + newline + // data.labelWork + data.work
               newline + // Add one whole blank line
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               twittering + newline + // data.labelTwitter + data.twitter
               webing // data.labelWeb + data.web

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
