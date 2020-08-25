import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// Import our component from this folder
import Dialog from './Dialog';
import Form from '../Form/Form';
// Here we describe the stories we want to see of the Button. The component is
// pretty simple so we will just make two, one with text and one with emojis
// Simple call storiesOf and then chain .add() as many times as you wish
//
// .add() takes a name and then a function that should return what you want
// rendered in the rendering area
storiesOf('Dialog')
  .add('open with title', () => (
    <Dialog open={true} title={"Dialog Title"} />
  ))
  .add('large', () => (
    <Dialog size="lg" 
      open={true} title={"Dialog Title"}>

    <Form
      fields={[
        {
          type: "STRING",
          label: "Name"
        }
      ]} />
  </Dialog>
  ))
  .add('with form', () => (
    <Dialog
      primaryText="Save"
      secondaryText="Close"
      open={true}
      title={"Dialog Title"}>
    <Form
      fields={[
        {
          type: "STRING",
          label: "Name"
        }
      ]} />
  </Dialog>
  ));
