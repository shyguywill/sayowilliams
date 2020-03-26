import React from 'react';
import '../App.css';
import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap'

import * as emailjs from 'emailjs-com'


class Contact extends React.Component {

    state = { name: '', email: '', subject: '', message: '', sectionVisible: false}

    isSection(el) {
      console.log(el.getBoundingClientRect().top)
      console.log(window.pageYOffset)
      return el.getBoundingClientRect().top < window.innerHeight;
  }
    
  componentDidMount() {
      document.addEventListener('scroll', this.trackScrolling);
  }
    
  componentWillUnmount() {
      document.removeEventListener('scroll', this.trackScrolling);
  }
    
    trackScrolling = () => {
      const wrappedElement = document.getElementById('contact'); 
      if (this.isSection(wrappedElement)){
          console.log('is article')
          this.setState({ sectionVisible: true})
          document.removeEventListener('scroll', this.trackScrolling);
      }
    };
      
      handleSubmit(e) {
        e.preventDefault()    
        
        const { email, subject, message } = this.state    
      
        let templateParams = {
          from_name: email,
          subject: subject,
          message_html: message,
         }  

        emailjs.send('gmail', 'template_OwfPvRnL', templateParams, 'user_AK8OgfEKUgSJA3TBuwbDg')
          .then ((response) => {
            console.log(response.text)
            if (response.text === 'OK') {
              this.resetForm()
            }
          }) 
          .catch ( (err) => console.log(err))
     }
     
     resetForm = () => {
        this.setState({
          name: '',
          email: '',
          subject: '',
          message: '',
        })
      }
      
      handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
      }
      
      render() {
        return (
              <section id="contact" className={this.state.sectionVisible ? "animated fadeInRightBig delay-1s" : "section-pre-loaded"}>
                 <h1 className="p-heading1">Get in Touch</h1>
              <Form onSubmit={this.handleSubmit.bind(this)}>
                <FormGroup controlId="formBasicEmail">
                  <Label className="text-muted">Email address</Label>
                  <Input
                    type="email"
                    name="email"
                    value={this.state.email}
                    className="text-primary"
                    onChange={this.handleChange.bind(this, 'email')}
                    placeholder="Enter email"
                  />
                </FormGroup>
                <FormGroup controlId="formBasicName">
                  <Label className="text-muted">Name</Label>
                  <Input
                    type="text"
                    name="name"
                    value={this.state.name}
                    className="text-primary"
                    onChange={this.handleChange.bind(this, 'name')}
                    placeholder="Name"
                  />
                </FormGroup>
                <FormGroup controlId="formBasicSubject">
                  <Label className="text-muted">Subject</Label>
                  <Input
                    type="text"
                    name="subject"
                    className="text-primary"
                    value={this.state.subject}
                    onChange={this.handleChange.bind(this, 'subject')}
                    placeholder="Subject"
                  />
                </FormGroup>
                <FormGroup controlId="formBasicMessage">
                  <Label className="text-muted">Message</Label>
                  <Input
                    type="textarea"
                    name="message"
                    className="text-primary"
                    value={this.state.message}
                    onChange={this.handleChange.bind(this, 'message')}
                  />
                </FormGroup>
                <Button variant="primary" type="submit" style={{marginBottom: '20px'}} >
                  Submit
                </Button>
              </Form>
              </section>
        )
      }
}

export { Contact };