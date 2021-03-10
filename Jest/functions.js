const axios = require('axios')
const functions = {
    add: (x, y) => x+y,
    divide: (a,b) => a/b,
    mult: (a,b) => a*b,
    isNull: () => null,
    createUser: () =>{
        const user = { firstName: 'Ramo'}
        user['lastName'] = 'Ydakleb';
        return user;
    },
    checkValue: (x) => x,
    //perform a a get request to jsonplaceholder(fake REST API)
    fetchMeTheUser:() => axios.get('http://jsonplaceholder.typicode.com/users/3')
        .then(response => response.data)
        .catch(err => 'error')
};

module.exports = functions;
