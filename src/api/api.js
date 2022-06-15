import service from './index'

export  function login(data) {
  return service({
    method: 'post',
    url: '/login',
    data
  })
}