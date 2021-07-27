#!/usr/bin/env node

'use strict'

console.log('Hello!  This package is meant to be downloaded over an HTTPS channel that')
console.log('enforces TLS 1.2, to test whether you\'re ready for upgrades to the public')
console.log('npm registry.  To do this, run:')
console.log('')
console.log('npm install -g https://tls-test.npmjs.com/tls-test-1.0.0.tgz')
console.log('')
console.log('If that command succeeds then you\'re ready for TLS 1.2 for npmjs.com.')
console.log('For more information, see https://github.com/npm/tls-test#readme')
console.log('')
