import React from "react"

const Navbar = () => {

  return (
    <nav class="navbar">
    <a href="" class="logo">
      {/*<img src="" alt="logo">*/}
    </a>
    <ul class="nav-links">
      <li class="nav-item"><a href="users">Users</a></li>
      <li class="nav-item"><a href="groups">Groups</a></li>
    </ul>
  </nav>
    
  )
}

export default Navbar

/*
<header style={headerStyle} >
      <div class="navbar">
        <div class="logo">
          <a href="#" class="brand-logo">Logo</a>
        </div>
      </div>
      <div class="navigation">
          <li><a class="tab" href="users">Users</a></li>
          <li><a class="tab" href="groups">Groups</a></li>
        </div>
    </header>*/