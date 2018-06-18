// 导入http 内置模块

const http = require('http')

// 导入url模块
const urlModule = require('url')

// 创建一个http服务器

const server = http.createServer()

// 监听http服务端的请求
server.on('request', function (req, res) {
  // const url = req.url
  const { pathname: url, query } = urlModule.parse(req.url, true)
  if (url === '/getscript') {
    // var scriptStr = 'show()'
    var data = {
      name: 'wpx',
      age: 21,
      gender: '男'

    }

    var scriptStr = `${query.callback}(${JSON.stringify(data)})`
    res.end(scriptStr)
  } else {
    res.end('404')
  }
})
server.listen(3000, function () {
  console.log('3000')
})
