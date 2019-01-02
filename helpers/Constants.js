const Constant = {    
    
    DB_SERVER: 'mongodb://localhost:27017/oomph', // DB name: oomph
    API_GET_ALL_USERS: '/get_all_users', // {start,limit}
    API_ADD_USER: '/add_user', // {name,email}
    API_CREATE_COLL: '/create_collection', // :name
    
}

module.exports = Constant;