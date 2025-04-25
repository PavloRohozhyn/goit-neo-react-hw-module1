import React from "react";
import FriendListItem from "./FriendListItem";
import css from "./Friend.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.fr_list}>
      {friends &&
        friends.map((item) => (
          <li key={item.id} className="css.fr_list_item">
            <FriendListItem
              name={item.name}
              status={item.isOnline}
              avatar={item.avatar}
            />
          </li>
        ))}
    </ul>
  );
};

export default FriendList;
