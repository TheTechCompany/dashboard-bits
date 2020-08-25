import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import './EditList.css';

export default function _EditList(props){
  const renderField = (obj) => {
    return (
      <ListItem button>
          {props.struct.map((field) => {
            switch(field.type){
              case "STRING":
                return (
                  <div>
                      {obj[field.key]}
                  </div>
                )

              case "MONEY":
                return (
                  <div>
                      {obj[field.key]}
                  </div>
                )
              default:
                return (
                  <div />
                )
            }
          })}
      </ListItem>
    )
  }
  return (
    <div className="edit-list">
      <List>
          {props.data.map((x) => renderField(x))} 
      </List>
    </div>
  );
}
