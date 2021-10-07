import React from "react"

const Navbar = () => {
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "1.5em",
  }

  return (
    <header style={headerStyle} >
      <div class="navbar">
        <div class="logo">
          <a href="#" class="brand-logo">Logo</a>
        </div>
      </div>
      <div class="temp">
          <ul class="navigation">
            <li><a class="tab" href="users">Users</a></li>
            <li><a class="tab" href="groups">Groups VAKANTEI DATUM INVULLEN PIK</a></li>
          </ul>
        </div>
    </header>
  )
}

export default Navbar