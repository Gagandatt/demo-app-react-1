import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [user, setUser] = useState([])
  useEffect(() => {
    axios.get("https://api.github.com/users/Gagandatt")
      .then((res) => { setUser(res.data) })
  }, [])
  return (
    <>
      <h1>Hello Gagan</h1>

      <img src={user.avatar_url} alt="img hai bhai" />
    </>
  )
}

export default App