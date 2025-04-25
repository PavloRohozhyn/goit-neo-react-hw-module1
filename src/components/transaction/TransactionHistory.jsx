import React from "react";
import TransactionHistoryData from "./TransactionHistoryData";
import css from "./Transaction.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <>
      <table className={css.t_main}>
        <thead className={css.t_head}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody className={css.t_body}>
          {items &&
            items.map((item) => (
              <TransactionHistoryData
                key={item.id}
                type={item.type}
                amount={item.amount}
                currency={item.currency}
              />
            ))}
        </tbody>
      </table>
    </>
  );
};

export default TransactionHistory;
