import { TransactionRow } from "./TransactionRow";
import css from "./Transaction.module.css"

export const TransactionHistory = ({ items} ) => {
    return (
      <>
        <table className={css.transactionHistory}>
            <thead>
              <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
              </tr>
            </thead>
            <tbody>
            {items.map((item, index) => (
              <tr key={item.id} className={index % 2 === 0 ? css.white : css.grey}>
                <TransactionRow item={item} />
              </tr>
              ))}
            </tbody>
        </table>
      </>
    );
};