import PropTypes from 'prop-types';
import shortid from 'shortid';
import styles from './Statistics.module.css';
import Notification from '../Notification/Notification';

const Statistics = ({ options, total, percentage, message }) => {
  if (total()) {
    return (
      <ul className={styles.optionList}>
        {Object.keys(options).map(option => {
          const id = shortid.generate();

          return (
            <li className={styles.option} key={id}>
              {option}: <span>{options[option]}</span>
            </li>
          );
        })}
        <li className={styles.option}> Total: {total()} </li>
        <li className={styles.option}> Total: {percentage()}% </li>
      </ul>
    );
  } else return <Notification message={message} />;
};

Statistics.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  total: PropTypes.func.isRequired,
  percentage: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default Statistics;
