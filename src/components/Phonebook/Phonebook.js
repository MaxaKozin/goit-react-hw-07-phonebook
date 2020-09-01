import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PhonebookItem from './PhonebookItem';
import { getVisibleContacts } from '../../redux/phonebook/phonebook-selectors';

import s from './Phonebook.module.css';

const Phonebook = ({ contacts }) => {
  return (
    <>
      {contacts && (<ul className={s.list}>
        {contacts.map(contact =>
          <PhonebookItem {...contact} key={contact.id} />
        )}
      </ul>)}
    </>
  )
}

Phonebook.propTypes = {
  contacts: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => {
  return ({
    contacts: getVisibleContacts(state),
  })
};

export default connect(mapStateToProps)(Phonebook);
