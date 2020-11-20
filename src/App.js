import React, { Component } from "react";
import { connect } from 'react-redux'
import { addContact } from './store/ContactsActions'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Contacts from "./Components/Contacts";
import AddContactForm from "./Components/AddContactForm";
import "./App.css";

class App extends Component {
  
  addNewContact = (newContact) => {
    //contact.id = Math.random().toString();
    this.props.addContact(newContact)
  };

  deleteContact = (id) => {
    let undeletedContacts = this.state.contacts.filter((contact) => contact.id !== id);
    this.setState({
      contacts: undeletedContacts,
    });
  };

  editContact = (id, updatedContact) => {
    this.setState({
      contacts: this.state.contacts.map((contact) =>
        contact.id === id ? updatedContact : contact
      ),
    });
  };

  render() {
    return (
      <>
        <Container fluid style={{ marginTop: "2rem" }}>
          <Row>
            <Col md="4">
              <h4>ADD CONTACTS</h4>
              <br/>
              <AddContactForm addContact={this.addNewContact} />
            </Col>
            <Col>
            <h4>ALL CONTACTS</h4>
            <br/>
              <Contacts contactData={this.props.contacts} deleteContact={this.deleteContact} editContact={this.editContact} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps =(state) => ({
  contacts: state.contacts
});

const mapDispatchToProps = {
  addContact: addContact
}

export default  connect (mapStateToProps, mapDispatchToProps)(App);
