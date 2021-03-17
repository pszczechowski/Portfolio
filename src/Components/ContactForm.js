import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
init("user_uXvyFhRHg1WBtAAOR2zwn");

const styles = theme => ({
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
    '& .MuiOutlinedInput-input':{
      color: 'white'
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
});

function sendEmail(e) {
  e.preventDefault();
  emailjs.sendForm('portfolioEmail', 'template_ie1aj7g', e.target, 'user_uXvyFhRHg1WBtAAOR2zwn')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
}

class ContactForm extends React.Component {

  state = {
    formData: {
      email: '',
      message: '',
    },
    submitted: false,
  }
  handleChange = (event) => {
    const formData = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  }

  changeText = () => {
    this.setState({ submitted: true }, () => {
      setTimeout(() => this.setState({ submitted: false }), 3000);
    });
  }

  handleSubmit = (e) => {
    sendEmail(e);
    this.changeText();
  }
  
  render() {
    const { formData, submitted } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      <ValidatorForm
        ref="form"
        onSubmit={this.handleSubmit}
      >
        <TextValidator
          label="Email"
          onChange={this.handleChange}
          name="email"
          value={formData.email}
          validators={['required', 'isEmail']}
          errorMessages={['this field is required', 'email is not valid']}
          variant="outlined"
        />
        <TextValidator
          id="outlined-textarea"
          name="message"
          label="Message"
          rows="4"
          placeholder="Write message"
          multiline
          margin="normal"
          variant="outlined"
          value={formData.message}
          onChange={this.handleChange}
          validators={['required']}
          errorMessages={['this field is required']}
        />
        <Button
          color="primary"
          variant="contained"
          type="submit"
          disabled={submitted}
        >
          {
            (submitted && 'Your message is send!')
            || (!submitted && 'Send')
          }
        </Button>
      </ValidatorForm></div>
    );
  }
}
export default withStyles(styles)(ContactForm);