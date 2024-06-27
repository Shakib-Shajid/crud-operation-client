import { useEffect } from "react"
import { useState } from "react"
import { IoIosSearch } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoKeySharp } from "react-icons/io5";




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

      <div className="m-10 w-2/3 mx-auto p-10 border-2 border-red-500 rounded-xl">
      <h3 className="text-2xl text-center font-bold">Fill up the Form</h3>
        <label className="input input-bordered border-2 flex items-center gap-2 my-5">
          <input type="text" className="grow" placeholder="Search" />
          <IoIosSearch />
        </label>
        <label className="input input-bordered border-2 flex items-center gap-2 my-5">
          <MdOutlineEmail />
          <input type="text" className="grow" placeholder="Email" />
        </label>
        <label className="input input-bordered border-2 flex items-center gap-2 my-5">
          <FaUser />
          <input type="text" className="grow" placeholder="Username" />
        </label>
        <label className="input input-bordered border-2 flex items-center gap-2 my-5">
          <IoKeySharp />
          <input type="password" className="" placeholder="Password" value="" />
        </label>
        <button className="btn btn-success w-full ">Success</button>

      </div>
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
