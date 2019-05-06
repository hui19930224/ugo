function request (obj) {
  let url = obj.url || ''
  let method = obj.method || 'get'
  let data = obj.data || {}
  url = 'https://www.zhengzhicheng.cn' + url



  return new Promise(function (resolve, reject) {
    mpvue.request({
      url: url,
      method: method,
      data: data,
      success: function (info) {
        // console.log(info)
        resolve(info.data)
      }
    })
  })
}

export default request
