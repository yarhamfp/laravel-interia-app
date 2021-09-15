import React, { useState } from "react";
import Dialog from "../../Components/Dialog";
import Pagination from "../../Components/Pagination";
import CreateUser from "../../Components/CreateUser";
import useDialog from "../../Hooks/useDialog";
import App from "../../Layouts/App";
import EditUser from "../../Components/EditUser";

export default function Index(props) {
    const { data: users, links, from } = props.users;
    const [state, setState] = useState([]);
    const [openModalAdd, closeTriggerModalAdd, addTrigger] = useDialog();
    const [openModalEdit, closeTriggerModalEdit, editTrigger] = useDialog();
    const openDialogEdit = (user) => {
        setState(user);
        openModalEdit();
    };
    return (
        <>
            <div className="container">
                <Dialog trigger={addTrigger} title="Create New User">
                    <CreateUser close={closeTriggerModalAdd} />
                </Dialog>

                <Dialog
                    trigger={editTrigger}
                    title={`Edit User: ${state.name}`}
                >
                    <EditUser model={state} close={closeTriggerModalEdit} />
                </Dialog>

                <button onClick={openModalAdd} className="btn btn-primary">
                    Add
                </button>
                <div className="card mt-4">
                    <div className="card-header">Users Data</div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Username</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Location</th>
                                        <th scope="col" className="text-end">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user, index) => (
                                        <tr key={user.id}>
                                            <th>{from + index}</th>
                                            <td>{user.name}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{user.location}</td>
                                            <td>
                                                <div className="dropdown text-end">
                                                    <button
                                                        className="btn p-0 btn-sm"
                                                        type="button"
                                                        id="dropdownMenuButton1"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={16}
                                                            height={16}
                                                            fill="currentColor"
                                                            className="bi bi-three-dots-vertical"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                        </svg>
                                                    </button>
                                                    <ul
                                                        className="dropdown-menu"
                                                        aria-labelledby="dropdownMenuButton1"
                                                    >
                                                        <li>
                                                            <button
                                                                className="dropdown-item"
                                                                onClick={() =>
                                                                    openDialogEdit(
                                                                        user
                                                                    )
                                                                }
                                                            >
                                                                Edit
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="#"
                                                            >
                                                                Delete
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="#"
                                                            >
                                                                Show
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <Pagination links={links} />
                    </div>
                </div>
            </div>
        </>
    );
}

Index.layout = (page) => <App children={page} title="Users Data" />;
