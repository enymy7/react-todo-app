import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React from "react";

function Todo(props) {
  return (
    <>
      {/* <li>{props.todoprop }</li> */}
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={`Todo`} secondary={`${props.todoprop}`} />
        </ListItem>
      </List>
    </>
  );
}

export default Todo;
