import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './ContactList.module.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import phoneBookActions from '../../redux/phoneBook/phoneBook-actions';
import '../Fade/Fade.css';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <TransitionGroup component="ul" className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <CSSTransition
          key={id}
          timeout={250}
          classNames="List-slideIn"
          unmountOnExit
        >
          <li className={styles.contact}>
            <span className={styles.name}>{name}</span>
            <span className={styles.number}>{number}</span>
            <button
              className={styles.btn}
              onClick={() => {
                onDelete(id);
              }}
              aria-label="Удалить контакт"
            >
              Delete
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

ContactList.propTypes = {
  onDelete: PropTypes.func,
  contacts: PropTypes.arrayOf(PropTypes.object),
};

const getFilteredContactsList = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = ({ phoneBook: { contacts, filter } }) => ({
  contacts: getFilteredContactsList(contacts, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(phoneBookActions.onDelete(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
