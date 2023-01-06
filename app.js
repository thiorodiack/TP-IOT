const express = require('express')
const app = express() 
const token = 'f1ASWRoyPYEGi6abzW2yirtSCR5CUasxMAbTzNgunXYclnVQ7-mY7hIDqSFljsgiD27KV107b21HLvWxTF_Hig=='
const port = 8000 
app.post('/api/humidity', (req, res) => {
  req.on('end', ({
    
  }))
}) 
app.post('/api/temperature', (req, res) => {   console.log('test'); })  
app.listen(port, () => {console.log(`Example app listening on port ${port}`)})

const {InfluxDB, Point} = require('@influxdata/influxdb-client')

const url = 'http://localhost:8086/'

const client = new InfluxDB({url, token})

let org = `DI`
let bucket = `DIO`

let writeClient = client.getWriteApi(org, bucket, 'ns')

for (let i = 0; i < 5; i++) {
  let point = new Point('measurement1')
    .tag('tagname1', 'tagvalue1')
    .intField('field1', 10)

  void setTimeout(() => {
    writeClient.writePoint(point)
  }, i * 1000) // separate points by 1 second

  void setTimeout(() => {
    writeClient.flush()
  }, 5000)
}
