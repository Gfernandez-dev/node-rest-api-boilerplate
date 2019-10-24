
const Api= require('../../infrastructure/main');
const moment =require('moment');
require('dotenv');

class Users {

   async find() {
    const api = new Api;
    const allUsers= await api.getDataApi();
    let arrayUser= allUsers.users;
    let activeUsers= arrayUser.filter(function (item) {
      return item.is_active == true            
    });
    let sortedActUsr=activeUsers.sort(function(a, b) {
      return b.lastname.localeCompare(a.lastname)          
    });   
    sortedActUsr.map(function(e){
    e.age = moment().diff(e.birthday, 'years',false); 
    });
    return sortedActUsr;
  } 
   
}
module.exports = Users;
