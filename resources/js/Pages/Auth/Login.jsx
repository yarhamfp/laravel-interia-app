import { Link, useForm } from "@inertiajs/inertia-react";
import React from "react";
import Guest from "../../Layouts/Guest";

export default function Login({ errors }) {
    const { data, setData, post } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    const changeHandler = (e) =>
        setData({ ...data, [e.target.id]: e.target.value });

    const submitHandler = (e) => {
        e.preventDefault();
        post(route("login"), data);
    };

    return (
        <>
            <div className="card">
                <div className="card-header">Login</div>
                <div className="card-body">
                    <form onSubmit={submitHandler}>
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
                        <div className="mb-3 form-check">
                            <input
                                value={data.remember}
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        remember: e.target.checked,
                                    })
                                }
                                type="checkbox"
                                className="form-check-input"
                                id="remember"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="remember"
                            >
                                Remember Me
                            </label>
                            <Link href="/register" className="ms-5">
                                Register
                            </Link>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

Login.layout = (page) => <Guest children={page} title="Login" />;
