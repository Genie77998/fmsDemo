# fmsDemo
数据模拟工具


<!--fms.js-->
var fms = require('fms')
fms.run()

fms.ajax({
    url: '/weather/today',
    type: 'get',
    request: {
        id: 1
    },
      res: 'ok',
      err: 'no'
    }
})
<!---->



npm install && npm run test
