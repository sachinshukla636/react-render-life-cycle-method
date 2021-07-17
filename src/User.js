import React from 'react';
class User extends React.Component {
  // using another method i,e state
  constructor() {
    super();
    this.state = {
      email: 'sachinshukla636@gmail.com'
    };
  }
  render() {
    console.log('Render Method', this.props);
    console.log(this.state.email);
    return (
      <div>
        <h2>User Component {this.props.name}</h2>
        <button
          onClick={() => this.setState({ email: 'sachinr.shukla@tcs.com' })}
        >
          Update email
        </button>
      </div>
    );
  }
}

export default User;
