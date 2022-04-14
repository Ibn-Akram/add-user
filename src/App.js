import UsersList from "./User/UsersList";
import React, {useState} from "react";
import AddUser from "./User/AddUser";
function App() {
 const [usersList,setUsersList] = useState([]);
 const addUserHandler = (uName,uAge)=>{
   setUsersList((prevUsersList)=>{
     return [...prevUsersList,{name:uName,age:uAge}]
   })
 }
  return (
    <div className="App">
     <AddUser onAddUser={addUserHandler}/>
     <UsersList users={[]}/>
    </div>
  );
}

export default App;
