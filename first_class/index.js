const fs  = require('fs')

// create and write test to it. arg1 = file name, arg2 = test to write in file
fs.writeFileSync('hello.txt', 'I am created from fs module in current path.')