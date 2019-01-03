### NodeJS / Express / MongoDB
A simple way to build express restful api and MongoDB server.
1. Run `npm install` first to initiate node modules
2. Running server: `node server`
3. Browse url on port **3000**

### URI Routing
Query string of URL to request and handling each params

`localhost:3000/controller/method?params=<params>`

**example :**

`http://localhost:3000/users/get_all_users?start=0&limit=10`

### Route / Method
Define your methods depends on controller name

**example**

`User.js` : **get_all_users** / **add_user** / **update_user**

`Task.js` : **get_all_tasks** / **get_task_by_id**

### Models
Same as route, you have to create each of models depends on controller name

### Helpers
Simplify your codes using constant helpers and redefine into each methods. Also create your libraries into libraries.js. For database connection, we use connection helper to declare each methods (connect, get and close)

### App.js
Set up your controller name into **App.js**

___

More feedback? Feel free to contact me at **[me@adie.pw](mailto:me@adie.pw)**