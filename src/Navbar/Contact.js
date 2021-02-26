import { makeStyles } from "@material-ui/core/styles";
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
      <span className={classes.footer}>Piotr Szczechowski © 2021. All rights reserved.</span>
    </div>
  )
}

export default Contact;