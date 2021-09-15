import { Link, useForm } from "@inertiajs/inertia-react";
import React from "react";
import Guest from "../../Layouts/Guest";

export default function Register({ errors }) {
    const { data, setData, post } = useForm({
        name: "",
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const changeHandler = (e) =>
        setData({ ...data, [e.target.id]: e.target.value });

    const submitHandler = (e) => {
        e.preventDefault();
        post(route("register"), data);
    };

    return (
        <>
            <div className="card">
                <div className="card-header">Register</div>
                <div className="card-body">
                    <form onSubmit={submitHandler}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Name
                            </label>
                            <input
                                value={data.name}
                                onChange={changeHandler}
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                            />
                            {errors && (
                                <small className="text-danger">
                                    {errors.name}
                                </small>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">
                                Username
                            </label>
                            <input
                                value={data.username}
                                onChange={changeHandler}
                                type="text"
                                className="form-control"
                                id="username"
                                name="username"
                            />
                            {errors.name && (
                                <small className="text-danger">
                                    {errors.name}
                                </small>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email address
                            </label>
                            <input
                                value={data.email}
                                onChange={changeHandler}
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                aria-describedby="emailHelp"
                            />
                            {errors && (
                                <small className="text-danger">
                                    {errors.email}
                                </small>
                            )}
                            <div id="emailHelp" className="form-text">
                                We'll never share your email with anyone else.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                value={data.password}
                                onChange={changeHandler}
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                            />
                            {errors && (
                                <small className="text-danger">
                                    {errors.password}
                                </small>
                            )}
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="password_confirmation"
                                className="form-label"
                            >
                                Confirm Password
                            </label>
                            <input
                                value={data.password_confirmation}
                                onChange={changeHandler}
                                type="password"
                                className="form-control"
                                id="password_confirmation"
                                name="password_confirmation"
                            />
                        </div>
                        <div className="d-flex">
                            <button type="submit" className="btn btn-primary">
                                Register
                            </button>
                            <Link href="/login" className="ms-5">
                                Login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

Register.layout = (page) => <Guest children={page} title="Register" />;
