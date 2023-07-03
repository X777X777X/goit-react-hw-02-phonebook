import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, deleteContact }) => (
  <ul className={css.list}>
    {contacts.map(({ id, name, number }) => {
      return (
        <li className={css.item} key={id}>
          <p className={css.info}>
            {name}: {number}
          </p>
          <button className={css.btn} type="button" onClick={() => deleteContact(id)}>
          </button>
        </li>
      );
    })}
  </ul>
);

ContactList.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
