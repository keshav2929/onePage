import React, { useState } from 'react'

const Navbar = () => {

    const [show,setShow]=useState(false);
  return (
    <>
        <section className="navbar-bg">

        <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container">
    <a class="navbar-brand" href="#">OnePage</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
        onClick={()=>setShow(!show)}>
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class={`collapse navbar-collapse ${show ? "show" : "" }`}>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#homeId">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#sectionId">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
      <form class="d-flex">
        <button class="btn btn-style" type="submit">Sign Up</button>
        <button class="btn btn-style btn-style-border" type="submit">Log In</button>
      </form>
    </div>
  </div>
</nav>
</section>
    </>
  )
}

export default Navbar



{/* <li class="nav-item dropdown">
<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  Dropdown
</a>
<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
  <li><a class="dropdown-item" href="#">Action</a></li>
  <li><a class="dropdown-item" href="#">Another action</a></li>
  <li><hr class="dropdown-divider" /></li>
  <li><a class="dropdown-item" href="#">Something else here</a></li>
</ul>
</li> */}