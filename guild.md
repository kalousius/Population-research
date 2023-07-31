src/
  |- App.js
  |- components/
      |- Home.jsx
      |- Register.jsx
      |- Login.jsx
  |- ...
State Managment
--Local
the useState() Hook
Global
-use Context() Hook
handlers /functions to update the state
Fetching data from API'S-RESTFUI API-HTTP methods to make CRUD requests for data from backend server
crud-create,read,update,Delete
## HTTP Methods
post= creating a resource
get = getting a resource
patch = update resource
delete = deleting a resource
## Fetch API
fetch api by default make GET request
let apiurl ="https://github.com/bahiirwa/uganda-APIs"
fetch(apiURL,{method,post})
fetch(apiUrl) -it makes request and returns a Promise()
Promise() => this will be resolved or rejected
Promise()
.then((response)=>{if promise is resolved}
)
.catch(error)=>
{
  when rejected
}
