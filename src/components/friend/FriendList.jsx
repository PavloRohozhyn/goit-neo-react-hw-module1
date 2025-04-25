import React from "react";
import FriendListItem from "./FriendListItem";
import css from "./Friend.module.css";

const FriendList = (data) => {
  return (
    <ul className={css.fr_list}>
      {Object.values(data.friends).map((item) => (
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
