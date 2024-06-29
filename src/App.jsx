import { useEffect } from "react"
import { useState } from "react"
import { IoIosSearch } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";





function App() {

  const handleAddUser = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = { name, email, password };

    fetch('http://localhost:5000/users', {
      method: "POST",
      header: {
        'content-type': "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const newUser = [...users, data]
        setUsers(newUser);
        form.reset();
      }
      )
    // 
  }

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div className="text-center m-10 md:m-20 text-xl md:text-3xl mx-auto max-w-7xl">
      <h3 className="rounded-xl font-bold p-5 bg-indigo-400 text-black w-2/3 mx-auto">*** User Manager ***</h3>
      <p className="my-3 bg-orange-600 text-white rounded-xl w-1/3 p-3 mx-auto">Number of users: {users.length}</p>

      <div className="m-10 w-2/3 mx-auto p-10 border-2 border-red-500 rounded-xl">
        <h3 className="text-2xl text-center font-bold">Fill up the Form</h3>
        <form onSubmit={handleAddUser}>
          <label className="input input-bordered border-2 flex items-center gap-2 my-5">
            <input type="text" name="search" className="grow" placeholder="Search" />
            <IoIosSearch />
          </label>
          <label className="input input-bordered border-2 flex items-center gap-2 my-5">
            <MdOutlineEmail />
            <input type="email" name="email" className="grow" placeholder="Email" />
          </label>
          <label className="input input-bordered border-2 flex items-center gap-2 my-5">
            <FaUser />
            <input type="text" name="name" className="grow" placeholder="Username" />
          </label>
          <label className="input input-bordered border-2 flex items-center gap-2 my-5">
          <FaPhoneAlt />
            <input type="number" name="number" className="grow" placeholder="Phone Number" />
          </label>
          <button className="btn btn-success w-full ">Submit</button>
        </form>
      </div>
      <div className="flex flex-wrap gap-5 justify-center">
        {
          users.map(user =>
            <div key={user.id}>
              <div className="card border-2 border-red-600 w-80 text-center font-bold">
                <div className="card-body">
                  <h2 className="text-xl">{user.name}</h2>
                  <p className="text-lg">{user.email}</p>
                  <div className="card-actions justify-center">
                    <button className="btn border-b-red-600 bg-slate-200">Show Details</button>
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
