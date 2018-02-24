'use strict'

const intersperse = require('intersperse-iterable')
const supportBindOperator = require('sbo')

module.exports = supportBindOperator((...args) => Array.from(intersperse(...args)))
