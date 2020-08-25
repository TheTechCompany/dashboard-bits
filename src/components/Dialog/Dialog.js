import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

export default function _Dialog(props){

  const scaleSize = () => {
    switch(props.size){
      case 'lg':
        return { width: '66vw', flexDirection: 'row'}
      case 'md':
        return { width: '44vw', flexDirection: 'row'}
      case 'xs':
      default:
        return {width: '33vw', flexDirection: 'column'}
    }
  }

  return (
    <Dialog
      maxWidth="lg"
      open={props.open}
      onClose={props.onClose}
    >
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent style={{...scaleSize(), display: 'flex'}}>
        {props.children}
      </DialogContent>
      <DialogActions>
        <Button onClick={props.secondaryAction}>{props.secondaryText}</Button>
        <Button 
          color="primary"
          variant="contained"
          onClick={props.primaryAction}>{props.primaryText}</Button>
      </DialogActions>
    </Dialog>
  );
}
