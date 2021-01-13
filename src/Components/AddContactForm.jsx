import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddContactForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            name: "",
            phoneNumber: "",
            address: "",
            group: ""
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
        this.props.addContact(this.state);
        this.setState ({
            name: "",
            phoneNumber: "",
            address: "",
            group: ""

        });

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
            <Form.Control type="Phone Number" placeholder="Enter phoneNumber" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Address</Form.Label>
            <Form.Control type="address" placeholder="Enter address" name="address" value={this.state.address} onChange={this.handleChange} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Group</Form.Label>
            <Form.Control type="text" placeholder="Enter Group type"  name="type" value={this.state.group} onChange={this.handleChange}/>
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddContactForm;