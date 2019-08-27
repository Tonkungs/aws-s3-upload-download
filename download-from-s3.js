const AWS = require('aws-sdk')
const fs = require('fs')
const path = require('path')
const key = require('./key.json')
// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html
// https://medium.com/codebase/using-aws-s3-buckets-in-a-nodejs-app-74da2fc547a6


AWS.config.update({
  accessKeyId: key.AWSAccessKeyId,
  secretAccessKey: key.AWSSecretKey
})

let s3 = new AWS.S3()
let filePath = "./data/file-2.txt"

let params = {
  Bucket: key.AWSBucketName,
  Key: "folder/1566914580896_file.txt"
}
let file = fs.createWriteStream(filePath);
// download file
// s3.getObject(params).createReadStream().pipe(file)

// เหมาะกับไฟล์ใหญ่ๆ
// s3.getObject(params).on('httpData', function (chunk) {
//   file.write(chunk);
//   console.log(123);
// })
//   .on('httpDone', function () {
//     file.end()
//     console.log('end');
//   })
//   .send();
(async function () {
  let data = await s3.getObject(params).promise()
  console.log('data', data);

})()