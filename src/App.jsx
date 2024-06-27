import { useEffect } from "react"
import { useState } from "react"

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div className="text-center m-20 md:m-52 text-xl md:text-3xl">
      <h3 className="rounded-xl font-bold p-5 bg-indigo-400 text-black">*** User Manager ***</h3>
      <p className="my-3 bg-orange-600 text-white rounded-xl w-2/3 mx-auto p-3">Number of users: {users.length}</p>
      <div className="grid grid-cols-3 gap-5 ">
        {
          users.map(user =>
            <div key={user.id}>
              <div className="card border-2 border-red-600 w-80 text-center font-bold">
                <div className="card-body">
                  <h2 className="text-xl">{user.name}</h2>
                  <p className="text-lg">{user.email}</p>
                  <div className="card-actions justify-center">
                    <button className="btn border-b-red-600 bg-slate-200">Details</button>
                  </div>
                </div>
              </div>
            </div>
          )}
      </div>
    </div>
  )
}

export default App
