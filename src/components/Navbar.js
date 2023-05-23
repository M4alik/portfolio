import React from "react"
export default function Navbar(){
    return(
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="../logo_m.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top rounded "/>
            4liki
        </a>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
        <ul class="nav justify-content-end">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Experiences</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Project</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
}