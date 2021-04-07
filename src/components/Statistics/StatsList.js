import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const StatsList = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      <h2 className="title">{title}</h2>

      <ul className={styles.statList}>
        {stats.map(statData => {
          return (
            <li key={statData.id} className={styles.item}>
              <span className={styles.label}>{statData.label}</span>
              <span className={styles.percentage}>{statData.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

StatsList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

StatsList.defaultProps = {
  title: '',
};

export default StatsList;
