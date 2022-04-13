import UsersList from "./User/UsersList";
import AddUser from "./User/AddUser";
function App() {
  return (
    <div className="App">
     <AddUser/>
     <UsersList users={[]}/>
    </div>
  );
}

export default App;
