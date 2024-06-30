import { useLoaderData } from "react-router-dom";

const Users = () => {

    const users = useLoaderData()
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
                                {/* <div className="card-actions justify-center">
                                    <button className="btn border-b-red-600 bg-slate-200">Show Details</button>
                                </div> */}
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Users;