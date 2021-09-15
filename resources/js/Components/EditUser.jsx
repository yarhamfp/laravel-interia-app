import { useForm } from "@inertiajs/inertia-react";
import React, { useEffect } from "react";
import FormUser from "./FormUser";

export default function EditUser({ close, model }) {
    // const errors = usePage().props;
    const { data, setData, put, reset, errors } = useForm({
        name: model.name,
        email: model.email,
        username: model.username,
        location: model.location,
    });

    useEffect(() => {
        setData({
            ...data,
            name: model.name,
            email: model.email,
            username: model.username,
            location: model.location,
        });
    }, [model]);

    const submitHandler = (e) => {
        e.preventDefault();
        put(route("users.update", model.id), {
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
