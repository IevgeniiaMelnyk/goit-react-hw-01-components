import PropTypes from 'prop-types';
import scss from './StatisticsList.module.scss';
import Statistics from '../Statistics/Statistics';
import { getRandomHexColor } from 'utils';

const StatisticsList = ({ title, stats }) => {
  return (
    <div className={scss.box}>
      {title && <h3 className={scss.title}>{title}</h3>}
      <ul className={scss.list}>
        {stats.map(stat => {
          return (
            <li
              key={stat.id}
              className={scss.item}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <Statistics label={stat.label} percentage={stat.percentage} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StatisticsList;

StatisticsList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

StatisticsList.defaultProps = {
  stats: [],
};
