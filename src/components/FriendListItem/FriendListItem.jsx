import React from "react";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, status }) => {
  return (
    <div className={css.fr_card}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.fr_card_title}>{name}</p>
      <p
        className={
          status ? css.fr_card_status_online : css.fr_card_status_offline
        }
      >
        {status ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
