import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class EditContactForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            name: props.contactInfo.name,
            phoneNumber: props.contactInfo.phoneNumber,
            address: props.contactInfo.address,
            type: props.contactInfo.type,
            id: props.contactInfo.id
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState ({
        [e.target.name] : e.target.value,
        });
        
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editContact(this.state.id, this.state );
        this.setState ({
            name: "",
            phoneNumber: "",
            address: "",
            type: ""

        });
        this.props.closeModal()

    };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" name="name" value={this.state.name} onChange={this.handleChange}/>
          </Form.Group>
          <Form.Group controlId="formBasicPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="Phone Number" placeholder="Enter phoneNumber" name="PhoneNumber" value={this.state.phonenumber} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="formBasicText">
            <Form.Label>Address</Form.Label>
            <Form.Control type="address" placeholder="Enter address" name="address" value={this.state.address} onChange={this.handleChange} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Type</Form.Label>
            <Form.Control type="text" placeholder="type"  name="type" value={this.state.type} onChange={this.handleChange}/>
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default EditContactForm;