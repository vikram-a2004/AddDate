/*const express = require('express')
const addDays = require('date-fns/addDays')

const app = express()

app.get("/", (request, response) => {
  const date = new Date()
  const result = addDays(
    new Date(date.getDate(), date.getMonth(), date.getFullYear()),
    100,
  )
  const responseResult = `${result.getDate()}/${result.getMonth() + 1}/${get.getFullYear()}`

  response.send(responseResult);
})
app.listen(3000)

module.exports = app
*/

const express = require('express')
const addDays = require('date-fns/addDays')
const format = require('date-fns/format')

const app = express()

app.get('/', (request, response) => {
  const date = new Date()
  const addedDate = addDays(date, 100)
  const formattedDate = format(addedDate, 'dd/MM/yyyy')

  response.send(formattedDate)
})

app.listen(3000)

module.exports = app

