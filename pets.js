const fs = require('fs')
const path = require('path')

const node = path.basename(process.argv[0])
const file = path.basename(process.argv[1])
const cmd = process.argv[2]

// This is to tell people what the heck we're doing
if (process.argv.length == 2) {
  console.error('Usage: node pets.js [read | create | update | destroy]')
  process.exit(1)
}

// this section reads out pets to the console.
if (process.argv[2] == 'read') {
  // This section throws all pets out if its read with no index provided.
  if (process.argv.length == 3) {
    fs.readFile('./pets.json', function read(err, data) {
      if (err) throw err
      let pets = JSON.parse(data)
      console.log(pets)
      process.exit()
    })
    // this is going to return a specific pet provided an index
  } else if (process.argv.length == 4) {
    let index = process.argv[3]
    fs.readFile('./pets.json', function read(err, data) {
      if (err) throw err
      let pets = JSON.parse(data)
      if (index > pets.length - 1 || index < 0) {
        console.error("Usage: node pets.js read INDEX")
      } else {
        console.log(pets[index])
      }
    })
  }
}

if (process.argv[2] == 'create') {
  if (process.argv.length == 6) {
    fs.readFile('./pets.json', function read(err, data) {
      if (err) throw err

      let pets = JSON.parse(data)
      let newObj = {}

      newObj['age'] = Number.parseInt(process.argv[3])
      newObj['kind'] = process.argv[4].toString()
      newObj['name'] = process.argv[5].toString()

      pets.push(newObj)
      console.log(newObj)

      fs.writeFile('./pets.json',JSON.stringify(pets), function(){

      })
    })
  }
  else {
    console.error(`Usage: ${node} ${file} ${cmd} AGE KIND NAME`)
    process.exit(1)
  }
}
