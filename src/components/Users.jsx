import axios from "axios";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {

    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = _id => {
        console.log(_id);
        // fetch(`http://localhost:5000/users/${_id}`, {
        //     method: "DELETE"
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.deletedCount > 0) {
        //             alert('delete successfully');
        //             // delete from ui also
        //             const remaining = users.filter(user => user._id != _id)
        //             setUsers(remaining);
        //         }
        //     })

        axios.delete(`http://localhost:5000/users/${_id}`)
            .then(data => {
                if (data.data.deletedCount > 0) {
                    alert('delete successfully');
                    // delete from ui also
                    const remaining = users.filter(user => user._id != _id)
                    setUsers(remaining);
                }
            })
            .catch(error => console.log(error))


    }
    return (
        <div>
            <h3 className="rounded-xl text-center font-bold p-5 bg-indigo-400 text-black w-2/3 mx-auto m-5">*** Total User : {users.length} ***</h3>
            <div className="grid grid-cols-1 md:grid-cols-3">
                {
                    users.map(user =>
                        <div key={user._id} className="card border-2 border-red-600 w-80 text-center font-bold">
                            <div className="card-body">
                                <h2 className="text-xl">{user.name}</h2>
                                <p className="text-lg">{user.email}</p>
                                <p className="text-lg">{user.number}</p>
                                <div className="card-actions justify-center">
                                    <Link to={`/update/${user._id}`}>
                                        <button className="btn hover:bg-green-600 hover:text-white">Update</button></Link>
                                    <button className="btn hover:bg-red-600 hover:text-white"
                                        onClick={() => handleDelete(user._id)}
                                    >Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Users;