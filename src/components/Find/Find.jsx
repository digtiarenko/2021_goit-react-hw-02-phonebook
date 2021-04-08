import styles from './Find.module.css';

const Find = ({ value, newFilter }) => {
  return (
    <form>
      <label>
        <span> Find Your Contact</span>
        <input
          className={styles.input}
          value={value}
          onChange={newFilter}
          name="filter"
          placeholder="Enter search query"
          type="text"
        />
      </label>
    </form>
  );
};

export default Find;
