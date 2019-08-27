//  อัพโหลดแบบ promise
(async function () {
  const AWS = require('aws-sdk')
  const fs = require('fs')
  const path = require('path')
  const key = require('./key.json')
  AWS.config.update({
    accessKeyId: key.AWSAccessKeyId,
    secretAccessKey: key.AWSSecretKey
  })

  let s3 = new AWS.S3()
  let filePath = "./data/file.txt"

  let params = {
    Bucket: key.AWSBucketName,
    Body: fs.createReadStream(filePath),
    Key: "folder/" + Date.now() + "_" + path.basename(filePath)
  }
  const data = await s3.upload(params).promise()
  console.log('Success');
  console.log('data', data);

})()