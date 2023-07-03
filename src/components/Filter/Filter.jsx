import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ filter, changeFilterInput }) => (
  <label className={css.label}>
    <input className={css.input}
      type="text"
      name={filter}
      onChange={changeFilterInput}
      placeholder="Find contacts by name"
    />
  </label>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilterInput: PropTypes.func.isRequired,
};
