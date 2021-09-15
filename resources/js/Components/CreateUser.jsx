import { useForm } from "@inertiajs/inertia-react";
import React from "react";
import FormUser from "./FormUser";

export default function CreateUser({ close }) {
    const { data, setData, post, reset, errors } = useForm({
        name: "",
        email: "",
        username: "",
        location: "",
    });

    const submitHandler = (e) => {
        e.preventDefault();
        post(route("users.store"), {
            data,
            onSuccess: () => {
                reset(), close();
            },
        });
    };
    return (
        <form onSubmit={submitHandler}>
            <FormUser
                errors={errors}
                data={data}
                setData={setData}
                submit={"Update"}
            />
        </form>
    );
}
