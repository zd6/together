import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";
export default function NavBar({ setFormOpen }) {
  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item header>
          <img src='/assets/nerv_logo.png' alt='logo' />
        </Menu.Item>
        <Menu.Item name='Together' />
        <Menu.Item>
          <Button
            onClick={() => setFormOpen(true)}
            positive
            inverted
            content='Creat Event'
          ></Button>
        </Menu.Item>
        <Menu.Item position='right'>
          <Button basic inverted content='Login'></Button>
          <Button
            basic
            inverted
            content='Register'
            style={{ marginLeft: "0.5em" }}
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
