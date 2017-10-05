import React from "react";

function Header () {
  var headerStyle = {
    color: "white",
    textShadow: "1px 1px black"
  }
  return(
    <div style={headerStyle}>
      <h1>Most Viable Plants</h1>
    </div>
  )

}

export default Header;
