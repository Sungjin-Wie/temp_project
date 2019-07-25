import React from "react";

const Info = ({ match }) => {
  return <div>Info about {match.params.name}</div>;
};
export default Info;
