const axios = require('axios');


const homeRoute = async (req, res) => {
    // Make a get request to api/users
    await axios.get(`http://localhost:${PORT}/api/users`)
        .then(function (response) {

            res.render('index', { users: response.data });
        })
        .catch(err=>{
            res.send("err");
        })
}


const add_user = (req, res) => {
    res.render('add_user');
}
const update_user = async (req, res) => {

    // Get that single user
    await axios.get(`http://localhost:3000/api/users/${req.query.id}`)
        .then(function(userdata){
             res.render('update_user',{user:userdata.data});
        })
        .catch(err=>{
             res.send("err");
        })
}

module.exports = {
    homeRoute, add_user, update_user
}