import React, { useState, useEffect } from 'react';
import { IconButton, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import contactImage from '../assets/contact.png'; // Renamed to avoid conflict
import homeLogo from '../assets/homelogo.png';
import groupLogo from '../assets/grouplogo.png';
import refreshLogo from '../assets/refresh.jpg';
import starLogo from '../assets/star.jpg';
import './ContactList.css'; // Import the CSS file

interface Contact {
  name: string;
  phone: string;
}

const Hmgrp: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [noResults, setNoResults] = useState(false); // State to manage no results notification

  useEffect(() => {
    // Update the path to the Contactlist.json file in the public folder
    fetch(`${process.env.PUBLIC_URL}/Contactlist.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setContacts(data))
      .catch((error) => console.error('Error loading contacts:', error));
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Update noResults state based on filtered contacts
  useEffect(() => {
    setNoResults(filteredContacts.length === 0 && searchQuery.length > 0);
  }, [filteredContacts, searchQuery]);

  const handleRefresh = () => {
    // Functionality for refreshing contacts (currently just logs to console)
    console.log('Contacts refreshed');
    // Optionally, you could re-fetch the contacts here as well
  };

  return (
    <div className="contactManager">
      <div className="header">
        <h1 className="appTitle">
          <img src={starLogo} alt="Star Logo" style={{ width: '30px', marginRight: '8px' }} />
          <span>Contact Manager</span>
        </h1>
        {/* Icons Row placed to the right of the title */}
        <div className="iconsRow">
          <IconButton onClick={() => console.log('Go to Home')}>
            <img src={homeLogo} alt="Home" style={{ width: '30px' }} />
          </IconButton>
          <IconButton onClick={() => console.log('Go to Groups')}>
            <img src={groupLogo} alt="Groups" style={{ width: '30px' }} />
          </IconButton>
        </div>
      </div>

      {/* Contact Title and Refresh Row */}
      <div className="contactTitleRow">
        <span className="contactTitle">Contacts</span>
        <IconButton onClick={handleRefresh}>
          <img src={refreshLogo} alt="Refresh" style={{ width: '30px' }} />
        </IconButton>
      </div>

      <div className="searchBar">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearch}
          className="searchInput"
        />
        <IconButton>
          <SearchIcon className="searchIcon" />
        </IconButton>
      </div>

      <List className="contactList">
        {filteredContacts.map((contact, index) => (
          <ListItem
            key={index}
            component="li"
            className="contactItem"
            onClick={() => console.log(`Clicked on ${contact.name}`)}
          >
            <ListItemIcon className="listItemIcon" style={{ minWidth: '50px' }}>
              <img src={contactImage} alt="Contact" style={{ width: '30px', borderRadius: '50%' }} /> {/* Updated */}
            </ListItemIcon>
            {/* Added padding or margin to create space between icon and text */}
            <ListItemText
              primary={`${contact.name} - ${contact.phone}`}
              className="listItemText"
              style={{ paddingLeft: '5px' }} // Adjust padding as needed
            />
          </ListItem>
        ))}

        {/* Display notification if no contacts are found */}
        {noResults && (
          <ListItem>
            <ListItemText primary="No contacts found." style={{ color: 'red' }} />
          </ListItem>
        )}
      </List>
    </div>
  );
};

export default Hmgrp;
