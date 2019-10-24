const User = require('../../domain/models/user');
const userCtrl = {};

userCtrl.getUser = async (req, res, next) => {
    
    try{ 
        
     const user= new User;
     const result = await user.find();
     res.status(200).json(result);
     
    }
    catch(err){  
        res.status(404).json({
            "success": false,
            "msg": "error"
          });
    }
};

module.exports = userCtrl;