const path = require('path')
const db = require('./../models/index')

// const fs = require('fs')

module.exports = {
  async getImageByname (req, res) {
    let fileName = req.params.name
    res.sendFile(path.join(__dirname, '../../motionImages/' + fileName))

    // const link = path.join(__dirname, '../../motionImages/zrt.mp4')
    // const stat = fs.statSync(link)
    // const fileSize = stat.size
    // const range = req.headers.range
    // if (range) {
    //   const parts = range.replace(/bytes=/, '').split('-')
    //   const start = parseInt(parts[0], 10)
    //   const end = parts[1]
    //     ? parseInt(parts[1], 10)
    //     : fileSize - 1
    //   const chunksize = (end - start) + 1
    //   const file = fs.createReadStream(link, {start, end})
    //   const head = {
    //     'Content-Range': `bytes ${start}-${end}/${fileSize}`,
    //     'Accept-Ranges': 'bytes',
    //     'Content-Length': chunksize,
    //     'Content-Type': 'video/mp4'
    //   }
    //   res.writeHead(206, head)
    //   file.pipe(res)
    // } else {
    //   const head = {
    //     'Content-Length': fileSize,
    //     'Content-Type': 'video/mp4'
    //   }
    //   res.writeHead(200, head)
    //   fs.createReadStream(link).pipe(res)
    // }
    // var video = fs.createReadStream(path.join(__dirname, '../../motionImages/zrt.avi'))
    // video.pipe(res)
  },
  async getAllImages (req, res) {
    try {
      let images = await db.sequelize.query('SELECT * FROM security WHERE file_type=1')
      images = images[0]
      let data = []
      // console.log(images)
      for (let id in images) {
        let filename = images[id].filename
        filename = filename.split('/')[4] // cut / et prendre le 4 eme element car le nom du ficher est de type /var/www/motionImage/.....
        data.push({
          id: images[id].id,
          url: filename}
        )
        // console.log(images[id])
      }
      res.send(data)
    } catch (e) {

    }
  }
}
