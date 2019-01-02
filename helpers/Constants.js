const user = encodeURIComponent('oomphuser');
const password = encodeURIComponent('oomph123');
const authMechanism = 'DEFAULT';

const Constant = {    
    
    DB_SERVER: 'mongodb://'+user+':'+password+'@localhost:27017/oomph?authMechanism='+authMechanism, // DB name: oomph
    API_GET_ALL_USERS: '/get_all_users', // {start,limit}
    API_ADD_USER: '/add_user', // {name,email}
    API_CREATE_COLL: '/create_collection', // :name
    
}

module.exports = Constant;