import React from 'react';

import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

function _Form(props){
  const renderField = (field) => {
    switch(field.type){
      case "STRING":
        return (
        <TextField label={field.label} />
        )
      case "MULTILINE":
        return (
          <TextField label={field.label} multiline={true} rowsMax={field.rowsMax} rows={field.rows} />
        )
      case "MONEY":
        return (
        <TextField label={field.label} InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>
        }} />
        )
      default:
        return (
        <TextField label={field.label} />
        )
    }
  }
  return (
    <div className={props.className}>
      {(props.fields || []).map((x) => 
        renderField(x)
      )}
    </div>
  );
}

export default styled(_Form)`
  display: flex;
  flex-direction: column;
`
