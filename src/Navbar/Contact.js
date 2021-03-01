import { makeStyles } from "@material-ui/core/styles";
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  contact: {
    backgroundColor: 'black',
    position: 'sticky',
  },
  socialLink: {
    display: 'flex',
    justifyContent: 'center',
    color: 'white',

  },
  icon: {
    padding: '10px',
  },
  footer: {
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'left',
    color: 'white',
    fontFamily: 'KalamRegular',
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    '& .MuiOutlinedInput-inputMultiline': {
      color: 'white',
    },
    '& .MuiInputBase-input': {
      color: 'white'
    },
    '& .MuiFormLabel-root': {
      color: 'white',
      fontFamily: 'KalamRegular',
    },
    '& h1': {
      display: 'flex',
      justifyContent: 'center',
      color: 'white',
      fontFamily: 'KalamRegular',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white'
    },
  },
  contactForm: {
    display: 'flex',
    flexDirection: 'column',
    width: '40%',
  },
})

function Contact(props) {
  const classes = useStyles();
  return (
    <div id="contact" className={classes.contact}>
      <div className={classes.socialLink}>
        <a className={classes.icon} href="https://github.com/pszczechowski" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={["fab", "github"]} color="white" /></a>
        <a className={classes.icon} href="https://www.linkedin.com/in/piotr-szczechowski-0649561b1/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={["fab", "linkedin-in"]} color="white" /></a>
      </div>
      <form className={classes.root} noValidate autoComplete="off">
        <div className={classes.contactForm}>
          <h1>Get in touch</h1>
          <TextField
            id="emailInput"
            label="Email"
            type="email"
            autoComplete="current-email"
            variant="outlined"
          />
          <TextField
            id="outlined-textarea"
            label="Message"
            rows="4"
            placeholder="Write message"
            multiline
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
        </div></form>
      <span className={classes.footer}>Piotr Szczechowski © 2021. All rights reserved.</span>
    </div>
  )
}

export default Contact;