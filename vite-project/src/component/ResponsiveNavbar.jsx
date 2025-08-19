import React from 'react'

export default function ResponsiveNavbar({openlist}) {
  return (
    <div>
      {openlist?
      <ul>
        <li><a>Handloom</a></li>
          <li><a>Shop by Ocassion</a></li>
            <li><a>Craft Stories</a></li>
              <li><a>About us</a></li>
              <li><button>Login</button></li>
      </ul>
      :""}
    </div>
  )
}

