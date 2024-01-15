import css from "./Transaction.module.css"

export const TransactionRow = ({ item: { type, amount, currency } }) => {
    return (
      <>
        <td className={css.textRow}>{type}</td>
        <td className={css.textRow}>{amount}</td>
        <td className={css.textRow}>{currency}</td>
      </>
    );
  };