const indexCtrl = {};
indexCtrl.index = async (req, res, next) => {
    res.send('The api must be in /users');
};
module.exports = indexCtrl;