import React from "react";
import { Button, Divider, Grid, Header, Icon, Label, List, Menu, Placeholder, Search, Segment, Table } from "semantic-ui-react"

function App() {
  return (
    <>
      <Segment placeholder>
        <Grid columns={2}>
          <Divider vertical>OR</Divider>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Header icon>
                <Icon name="search" />
                Cari document
              </Header>
              <Search placeholder="Search document..." />
            </Grid.Column>

            <Grid.Column textAlign="center">
              <Header icon>
                <Icon name="file pdf outline" />
                Tambah Document Baru
              </Header>
              <Button primary>Create Document</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column>
            <Segment raised>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line length="medium" />
                  <Placeholder.Line length="short" />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <Segment raised>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line length="medium" />
                  <Placeholder.Line length="short" />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <List>
              <List.Item as="h3">Website Terkait</List.Item>
              <List.Item
                icon="linkify"
                content={<a href="https://google.com" target="_blank" rel="noreferrer">Google</a>}
              />
              <List.Item
                icon="linkify"
                content={<a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>}
              />
              <List.Item
                icon="linkify"
                content={<a href="https://semantic-ui.com" target="_blank" rel="noreferrer">Semantic UI</a>}
              />
              <List.Item
                icon="linkify"
                content={<a href="https://niomic.id" target="_blank" rel="noreferrer">Niomic</a>}
              />
              <List.Item
                icon="linkify"
                content={<a href="https://reactjs.org" target="_blank" rel="noreferrer">React</a>}
              />
            </List>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={1}>
          <Grid.Column width={11}>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell textAlign="right" colSpan={2}>
                    <Search placeholder="Search document" />
                  </Table.HeaderCell>
                </Table.Row>
                <Table.Row>
                  <Table.HeaderCell textAlign="center">Nama Document</Table.HeaderCell>
                  <Table.HeaderCell textAlign="center">Jenis File</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <Label ribbom>Panduan Belajar Javascript</Label>
                  </Table.Cell>
                  <Table.Cell textAlign="center">PDF</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Panduan Belajar CSS</Table.Cell>
                  <Table.Cell textAlign="center">PDF</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Panduan Belajar React JS</Table.Cell>
                  <Table.Cell textAlign="center">PDF</Table.Cell>
                </Table.Row>
              </Table.Body>

              <Table.Footer>
                <Table.Row>
                  <Table.HeaderCell colSpan={2}>
                    <Menu floated="right">
                      <Menu.Item as="a"><Icon name="angle left"/></Menu.Item>
                      <Menu.Item as="a">1</Menu.Item>
                      <Menu.Item as="a">2</Menu.Item>
                      <Menu.Item as="a">3</Menu.Item>
                      <Menu.Item as="a">4</Menu.Item>
                      <Menu.Item as="a"><Icon name="angle right"/></Menu.Item>
                    </Menu>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}

export default App;
