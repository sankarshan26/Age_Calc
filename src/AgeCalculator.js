import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function AgeCalculator() {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const dobDate = new Date(dob);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - dobDate;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    setAge(Math.floor(ageInYears));
  };

  return (
    <Container style={{"display":"flex","justify-content":"center","align-items":"flex-start","height":"99vh",}}>
      <Row >
        <Row>
          <h1 style={{"margin-bottom":"2rem","margin-top":"2rem"}}>Age Calculator</h1>
          <Form>
            <Form.Group>
              <Form.Label  style={{"margin-bottom":"1rem","margin-top":"1rem"}}><h5>Enter your date of birth</h5></Form.Label>
              <Form.Control
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={calculateAge}  style={{"margin-top":"1rem"}}>
              Calculate Age
            </Button>
          </Form>
        </Row>
        <Row>
          {age && (
            <div className="result"   style={{"margin-top":"1rem"}}>
              <h3>You are {age} years old</h3>
            </div>
          )}
        </Row>
      </Row>
    </Container>
  );
}

export default AgeCalculator;
