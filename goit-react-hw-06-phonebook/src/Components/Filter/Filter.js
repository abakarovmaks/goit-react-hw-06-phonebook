import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import phoneBookActions from '../../redux/phoneBook/phoneBook-actions';
import './Filter.css';
import { CSSTransition } from 'react-transition-group';

const Filter = ({ value, onChange, contacts }) => {
  return (
    <CSSTransition
      in={contacts.length > 1}
      timeout={250}
      classNames="Filter-fade"
      unmountOnExit
    >
      <form className="form">
        <label>
          <span className="title">Find contacts by name</span>
          <input
            className="input"
            type="text"
            value={value}
            onChange={onChange}
          />
        </label>
      </form>
    </CSSTransition>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => ({
  value: state.phoneBook.filter,
  contacts: state.phoneBook.contacts,
});

const mapDispatchToProps = (dispatsh) => ({
  onChangeFilter: (e) =>
    dispatsh(phoneBookActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
