// import primary libraries
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NoteListItem = ({ note, fromTask, userList }) => {
  const dateCreated = new Date(note.created);

  const user = userList.filter((user) => user._id === note._user)[0];

  return !fromTask ? (
    <li>
      <Link to={`/notes/${note._id}`}> {note.name}</Link>
    </li>
  ) : (
    <div>
      <h4
        style={{ fontWeight: 1000, marginBottom: 0 }}
      >{`${user.firstName} ${user.lastName}`}</h4>
      <h6 style={{ display: "inline" }}>
        {dateCreated.toLocaleString("en-US").replace(",", " @")}
      </h6>
      <p style={{ marginTop: 10, marginBottom: 20 }}>{note.content}</p>
    </div>
  );
};

NoteListItem.propTypes = {
  note: PropTypes.object.isRequired,
};

export default NoteListItem;
