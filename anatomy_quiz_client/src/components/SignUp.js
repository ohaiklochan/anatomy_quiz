import React from 'react'
import { addUser } from '../actions/AllActions'
import { connect } from 'react-redux'
import { Grid, Form, Button } from 'semantic-ui-react'

class SignUp extends React.Component {

  constructor() {
    super ();
    this.state = {
      error: false,
      fields: {
        username: '',
        first_name: '',
        email: '',
        password: ''
      }
    };
  }

  handleChange = e => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields});
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addUser(this.state.fields)
    this.props.history.push('/mainhub')
  };

  render() {
    const { fields } = this.state;
    return (
      <div>
      {this.state.error ? <p>Please check your info and try again!</p> : null}
      <br></br>
      <Grid centered>
        <Grid.Column width={6}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Username</label>
            <input
              name="username"
              type="text"
              placeholder="Username"
              value={fields.username}
              onChange={this.handleChange}
              />
          </Form.Field>
          <Form.Field>
            <label>First Name</label>
            <input
              name="first_name"
              type="text"
              placeholder="First"
              value={fields.first_name}
              onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={fields.email}
              onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={fields.password}
              onChange={this.handleChange}
              />
          </Form.Field>
          <Button type="submit">Sign Up!</Button>
        </Form>
        </Grid.Column>
      </Grid>
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: user => dispatch(addUser(user)),
  }
}

export default connect(null, mapDispatchToProps)(SignUp)