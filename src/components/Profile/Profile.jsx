import React from "react";
import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.card_container}>
      <div className={css.card_profile}>
        <img className={css.card_img} src={image} alt="User avatar" />
        <p className={css.card_title}>{name}</p>
        <p className={css.card_text}>{tag}</p>
        <p className={css.card_text}>{location}</p>
      </div>
      <ul className={css.card_list}>
        <li className={css.card_item}>
          <span className={css.card_item_span_one}>Followers</span>
          <span className={css.card_item_span_two}>{stats.followers}</span>
        </li>
        <li className={css.card_item}>
          <span className={css.card_item_span_one}>Views</span>
          <span className={css.card_item_span_two}>{stats.views}</span>
        </li>
        <li className={css.card_item}>
          <span className={css.card_item_span_one}>Likes</span>
          <span className={css.card_item_span_two}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
