const fetch = require('node-fetch');
class Main {
    
    async getDataApi() {   
        const uri = 'https://2eja2nqth0.execute-api.us-east-1.amazonaws.com/api/users';
        const options = {method: 'get'};
        const response = await fetch(uri,options);
        const data = await response.json();
        return data;
      }

}
module.exports = Main;