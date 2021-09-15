import React from "react";

export default function FormUser({ errors, submit, data, setData }) {
    const changeHandler = (e) => {
        setData({ ...data, [e.target.id]: e.target.value });
    };
    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input
                            value={data.name}
                            onChange={changeHandler}
                            type="text"
                            className={`form-control ${
                                errors.name ? "is-invalid" : ""
                            }`}
                            id="name"
                            name="name"
                        />
                        {errors && (
                            <small className="text-danger">{errors.name}</small>
                        )}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            Username
                        </label>
                        <input
                            value={data.username}
                            onChange={changeHandler}
                            type="text"
                            className={`form-control ${
                                errors.username ? "is-invalid" : ""
                            }`}
                            id="username"
                            name="username"
                        />
                        {errors && (
                            <small className="text-danger">
                                {errors.username}
                            </small>
                        )}
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Email address
                </label>
                <input
                    value={data.email}
                    onChange={changeHandler}
                    type="email"
                    className={`form-control ${
                        errors.email ? "is-invalid" : ""
                    }`}
                    id="email"
                    name="email"
                />
                {errors && (
                    <small className="text-danger">{errors.email}</small>
                )}
            </div>
            <div className="mb-3">
                <label htmlFor="location" className="form-label">
                    Location
                </label>
                <input
                    value={data.location ? data.location : ""}
                    onChange={changeHandler}
                    type="text"
                    className={`form-control ${
                        errors.location ? "is-invalid" : ""
                    }`}
                    id="location"
                    name="location"
                />
                {errors && (
                    <small className="text-danger">{errors.location}</small>
                )}
            </div>
            <div className="d-flex">
                <button type="submit" className="btn btn-primary">
                    {submit}
                </button>
            </div>
        </>
    );
}
