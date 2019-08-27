
(async function () {
    const AWS = require('aws-sdk')
    const key = require('./key.json')

    AWS.config.update({
        accessKeyId: key.AWSAccessKeyId,
        secretAccessKey: key.AWSSecretKey
    })

    let s3 = new AWS.S3()

    let params = {
        Bucket: key.AWSBucketName,
        Key: "folder/1566916863327_file.txt"
    }
    let data = await s3.deleteObject(params).promise()
    console.log('data', data);

})()