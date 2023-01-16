import PropTypes from 'prop-types';
import scss from './TransactionHistory.module.scss';

const TransactionHistory = ({ transactions }) => {
  const transaction = transactions.map((item, index) => {
    const result = index % 2 === 0;
    const zebraStyle = result ? scss.secondItem : scss.item;

    return (
      <tr key={item.id} className={zebraStyle}>
        <td className={scss.td}>{item.type}</td>
        <td className={scss.td}>{item.amount}</td>
        <td className={scss.td}>{item.currency}</td>
      </tr>
    );
  });

  return (
    <table className={scss.table}>
      <thead className={scss.thead}>
        <tr>
          <th className={scss.ts}>Type</th>
          <th className={scss.ts}>Amount</th>
          <th className={scss.ts}>Currency</th>
        </tr>
      </thead>
      <tbody>{transaction}</tbody>
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

TransactionHistory.defaultProps = {
  transactions: [],
};
