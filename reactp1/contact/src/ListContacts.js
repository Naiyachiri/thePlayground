import React, { Component } from 'react';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
// ESCAPE STRING is a NPM module that allows us to filter out escape strings
import sortBy from 'sort-by';
// NPM module that allows us to sort out an array in alphabetical order

class  ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  }

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState( { query: query.trim() })
  }

  clearQuery = () => {
    this.setState({ query:''})
  }

   render() {
    const { contacts, onDeleteContact } = this.props;
    const { query } = this.state;

    let showingContacts
    if (query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      showingContacts = contacts.filter((contact) => match.test(contact.name))
    } else {
      showingContacts = contacts
    }

    showingContacts.sort(sortBy('name'))

    return (
      <div className='list-contacts'>
        <div className='list-contacts-top'>
          <input
            className='search-contacts'
            type='text'
            placeholder='Search contacts'
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
            />
            </div>

          {/* example of dynamic rendering inside of react condition && rendered element*/}
            {showingContacts.length !== contacts.length && (
              <div className='showing-contacts'>
              <span>Now showing {showingContacts.length} of {contacts.length} total </span>
              <button onClick={this.clearQuery}>Show all</button>
              </div>
            )}

           <ol className='contact-list'>
             {showingContacts.map((contact) => (
              <li key={contact.id} className='contact-list-item'>
                <div className='contact-avatar' style={{
                  backgroundImage: `url(${contact.avatarURL})`
                }}/>
                <div className='contact-details'>
                  <p>{contact.name}</p>
                  <p>{contact.email}</p>
                </div>
                <button className='contact-remove' onClick={() => onDeleteContact(contact)}>
                Remove {contact.name}
                </button>
              </li>
              ))}
            </ol>
        </div>
    )
  }
}

export default ListContacts