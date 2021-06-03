const path = require('path')
const Controller = require('egg').Controller

class UploadController extends Controller {
  /**
   * 上传头像
   */
  async uploadAvatar () {
    const { ctx } = this

    let filePath
    const stream = await ctx.getFileStream()

    if (stream.fields.filePath) {
      filePath = stream.fields.filePath + '/' + path.basename(stream.filename)
    } else {
      filePath = path.basename(stream.filename)
    }

    const result = await ctx.oss.get('hospital').put(filePath, stream)

    ctx.body = {
      code: 0,
      message: '上传成功',
      data: { url: result.url }
    }
  }
}

module.exports = UploadController
