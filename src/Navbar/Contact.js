import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactForm from "../Components/ContactForm";

const useStyles = makeStyles({
  contact: {
    backgroundColor: 'black',
    position: 'sticky',
  },
  socialLink: {
    display: 'flex',
    justifyContent: 'center',
    color: 'white',
    padding: '10px',

  },
  icon: {
    padding: '10px',
    borderRadius: '40px',
    justifyContent: 'space-between',
    "&:hover": {
      background: "#303f9f"
    },
  },
 
  footer: {
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    color: 'white',
    fontFamily: 'KalamRegular',
  },
  contactForm: {
    display: 'flex',
    flexDirection: 'column',
    '& h1': {
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
    },
  },
})

function Contact(props) {

  const classes = useStyles();
  return (
    <div id="contact" className={classes.contact}>
      <div className={classes.contactForm}>
        <h1>Get in touch</h1>
        <ContactForm />
      </div>
      <div className={classes.socialLink}>
        <a className={classes.icon} href="https://github.com/pszczechowski" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={["fab", "github"]} color="white" size= "2x" /></a>
        <a className={classes.icon} href="https://www.linkedin.com/in/piotr-szczechowski-0649561b1/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={["fab", "linkedin-in"]} color="white" size= "2x" /></a>
      </div>
      <span className={classes.footer}>Piotr Szczechowski © 2021. All rights reserved.</span>
    </div>
  )
}

export default Contact;