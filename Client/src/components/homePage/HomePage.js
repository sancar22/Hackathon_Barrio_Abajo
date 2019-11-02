import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeButton } from "../../actions";

function HomePage(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    document.onkeydown = function(evt) {
      evt = evt || window.event;
      if (evt.keyCode === 27) {
        dispatch(closeButton());
      }
    };
  });

  return (
    <div>
      <div>Home</div>
    </div>
  );
}

export default withRouter(HomePage);
