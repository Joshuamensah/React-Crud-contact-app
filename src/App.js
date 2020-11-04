import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Contacts from "./Components/Contacts";
import AddContactForm from "./Components/AddContactForm";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          name: "Joshua Mensah",
          phoneNumber: "+233242136305",
          address: "St luke church",
          type: "Mobile",
          id: "094484fdfkjskks",
        },

        {
          name: "Susana Mensah",
          phoneNumber: "+233540166333",
          address: "St luke church",
          type: "Mobile",
          id: "hfhfdkfd98833",
        },
        {
          name: "Agnes Siaw",
          phoneNumber: "+233242323756",
          address: "St luke church",
          type: "land line",
          id: "nhff877370",
        },
      ],
    };
  }
  addNewContact = (contact) => {
    contact.id = Math.random().toString();
    this.setState({
      contacts: [...this.state.contacts, contact],
    });
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
              <Contacts contactData={this.state.contacts} deleteContact={this.deleteContact} editContact={this.editContact} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
