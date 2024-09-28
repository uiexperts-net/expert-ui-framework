import React from "react";
import { Card, Avatar, Typography, IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './Contactdetail.css';

import starLogo from '../assets/star.jpg';
import homeLogo from '../assets/homeLogo.png';
import contactListLogo from '../assets/contactListLogo.png';
import contacticon from '../assets/contacticon.png';

// Define the props interface
interface ContactDetailProps {
  name: string;
  phoneNumber: string;
}

const ContactDetail: React.FC<ContactDetailProps> = ({ name, phoneNumber }) => {
  return (
    <div className="contactManager">
      {/* Header Section */}
      <div className="header">
        <h1 className="appTitle">
          <img src={starLogo} alt="Star Logo" className="starLogo" />
          <span>Contact Manager</span>
        </h1>
        
        {/* Icons Row placed to the right of the title */}
        <div className="iconsRow">
          <IconButton onClick={() => console.log('Go to Home')}>
            <img src={homeLogo} alt="Home" className="header-icon" />
          </IconButton>
          <IconButton onClick={() => console.log('Go to contactlist')}>
            <img src={contacticon} alt="list" className="header-icon" />
          </IconButton>
          <IconButton onClick={() => console.log('Go to Contact List')}>
            <img src={contactListLogo} alt="Contact List" className="header-icon" />
          </IconButton>
        </div>
      </div>

      {/* Back Button Section */}
      <div className="back-button-container">
        <IconButton className="back-button" onClick={() => console.log('Go Back')}>
          <ArrowBackIosIcon />
        </IconButton>
      </div>

      {/* Contact Details Section */}
      <Card className="contact-card">
        <Avatar className="avatar">
          <AccountCircleIcon />
        </Avatar>
        <Typography variant="h6" className="name">
          Poorany         
        </Typography>
        <Typography variant="body1" className="last-name dark-bold">
          {name} {/* Display the name prop */}
        </Typography>
        <IconButton className="phone-button">
          <PhoneIcon className="phone-icon" />
          <Typography className="phone-number">{phoneNumber}</Typography> {/* Display the phoneNumber prop */}
        </IconButton>
      </Card>
    </div>
  );
};

export default ContactDetail;
