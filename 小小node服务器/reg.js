var express = require('express');
var fs = require('fs')
var router = express.Router();

router.post('/001', (req, res) => {
  let rs = fs.createReadStream('./reg.json',{
        flags:'r',  //表示打开文件之后想干什么 'r' 读，（'w' 写），默认是'r'
        //encoding:'utf-8' // 得到对象使Buffer 对象，如果指定编码那么得到就是字符串类型
    })
	rs.setEncoding('utf-8')
	rs.on('data',function(data){
	   res.send(data)
	})
	rs.on('end',function(data){ 
		console.log( '文件读完了 reg.json' )
	})
	rs.on('error',function( err ){  console.log('读取文件失败 reg.json'+err )  })   
})


module.exports = router