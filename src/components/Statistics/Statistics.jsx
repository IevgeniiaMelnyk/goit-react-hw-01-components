import PropTypes from 'prop-types';
import scss from './Statistics.module.scss';

const Statistics = ({ label, percentage }) => {
  return (
    <>
      <p className={scss.text}>{label}</p>
      <p className={scss.number}>{percentage}</p>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
