import { useLoaderData, useNavigate } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Update = () => {

    const loadedUsers = useLoaderData();
    const navigate = useNavigate();
    // const location = useLocation();
    // console.log(location);

    // const form = 
    
    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const number = form.number.value;
        const updatedUser = { name, email, number };
    
        fetch(`http://localhost:5000/users/${loadedUsers._id}`, {
          method: "PUT",
          headers: { 
            'content-type': "application/json"
           },
          body: JSON.stringify(updatedUser)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
              alert("User updated Successfully")
              form.reset();
              navigate("/users");
            }
          })
      }
    
    
    return (
        <div>
            <div className="m-5 w-2/3 mx-auto p-10 border-2 border-red-500 rounded-xl">
        <h3 className="text-2xl text-center font-bold">Update info of {loadedUsers.name}</h3>
        <form onSubmit={handleUpdate}>
          <label className="input input-bordered border-2 flex items-center gap-2 my-5">
            <MdOutlineEmail />
            <input type="email" name="email" className="grow" placeholder="Email" defaultValue={loadedUsers?.email}/>
          </label>
          <label className="input input-bordered border-2 flex items-center gap-2 my-5">
            <FaUser />
            <input type="text" name="name" className="grow" placeholder="Username" defaultValue={loadedUsers?.name}/>
          </label>
          <label className="input input-bordered border-2 flex items-center gap-2 my-5">
            <FaPhoneAlt />
            <input type="number" name="number" className="grow" placeholder="Phone Number" defaultValue={loadedUsers?.number}/>
          </label>
          <input type="submit" className="btn btn-success w-full" value="submit" />
        </form>
      </div>
        </div>
    );
};

export default Update;