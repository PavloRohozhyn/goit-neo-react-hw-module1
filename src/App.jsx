import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import userData from "../userData.json";
import friends from "../friends.json";
import transactions from "../transactions.json";

const App = () => {
  return (
    <>
      <fieldset className="space">
        <legend>
          <h2>Завдання 1</h2>
        </legend>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
      </fieldset>

      <fieldset className="space">
        <legend>
          <h2>Завдання 2</h2>
        </legend>
        <FriendList friends={friends} />
      </fieldset>

      <fieldset className="space">
        <legend>
          <h2>Завдання 3</h2>
        </legend>
        <TransactionHistory items={transactions} />
      </fieldset>
    </>
  );
};

export default App;
