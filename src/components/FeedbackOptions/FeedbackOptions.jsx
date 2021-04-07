import shortid from 'shortid';
import styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLikes }) => {
  return (
    <div className={styles.feedback}>
      {Object.keys(options).map(option => {
        const id = shortid.generate();
        return (
          <button
            key={id}
            type="button"
            className={styles.btn}
            onClick={onLikes}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLikes: PropTypes.func.isRequired,
};

export default FeedbackOptions;
