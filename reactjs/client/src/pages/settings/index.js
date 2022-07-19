import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import SettingsForm from '../../components/forms/settings';
import PageHeader from '../../components/header';

export default function Settings() {
  return (
    <>
      <PageHeader>
        <Container>
          <Row>
            <Col sm={9}>
              <h2>Settings</h2>
              <p>Edit your settings here.</p>
            </Col>
          </Row>
        </Container>
      </PageHeader>
      <Container className="mt-5">
        <Row>
          <Col sm={12}>
            <SettingsForm />
          </Col>
        </Row>
      </Container>
    </>
  );
}
