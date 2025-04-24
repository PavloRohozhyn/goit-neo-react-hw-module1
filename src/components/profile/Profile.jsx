import React from "react";
import css from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={css.card_container}>
      <div className={css.card_profile}>
        <img
          className={css.card_img}
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
        />
        <p className={css.card_title}>Petra Marica</p>
        <p className={css.card_text}>@pmarica</p>
        <p className={css.card_text}>Salvador, Brasil</p>
      </div>
      <ul className={css.card_list}>
        <li className={css.card_item}>
          <span className={css.card_item_span_one}>Followers</span>
          <span className={css.card_item_span_two}>1000</span>
        </li>
        <li className={css.card_item}>
          <span className={css.card_item_span_one}>Views</span>
          <span className={css.card_item_span_two}>2000</span>
        </li>
        <li className={css.card_item}>
          <span className={css.card_item_span_one}>Likes</span>
          <span className={css.card_item_span_two}>3000</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
