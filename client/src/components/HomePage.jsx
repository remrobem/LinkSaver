import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Auth from '../modules/Auth';

class HomePage extends React.Component {

  componentDidMount() {
    // update authenticated state on logout
    this.props.toggleAuthenticateStatus()
  }

  render() {
    return (
      <Card style={{ fontSize: '20px', color: 'black',  backgroundColor: 'slategray', textAlign: 'center' }} className="container">
        <CardTitle style={{ fontSize: '20px', color: 'white', backgroundColor: 'slategray' }} title="LinkSaver" />
          {Auth.isUserAuthenticated() ? (
            <CardText >Welcome! You are logged in.</CardText>
          ) : (
            <CardText>
            <CardText style={{ fontSize: '20px', color: 'white', backgroundColor: 'slategray' }}>You are not logged in.</CardText>
            <CardText style={{ fontSize: '20px', color: 'white', backgroundColor: 'slategray' }}>Please Select Log In or Sign Up.</CardText>
            </CardText>
          )}
      </Card>
    )
  }
};

export default HomePage;
