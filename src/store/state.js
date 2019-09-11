// 使用localStorage可能会有异常问题,需要处理
let defaultCity = '上海'
try{
  if(localStorage.city){
    defaultCity = localStorage.city
  }
}catch(e){}

export default {
    city : defaultCity
}
