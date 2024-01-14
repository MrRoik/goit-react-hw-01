

export const TransactionHistory = ({ type, amount, currency, id} ) => {
    return (
        <table className="transaction-history">
            {transactions.map(items => (
            <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  </tbody>
            ))}
        </table>
    );
}