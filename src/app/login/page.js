"use client"
import Link from "next/link";
import { Fragment } from "react";
import { useState } from "react";
import { contactUs } from "../auth.service";


export default function LoginRoute() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const handleContactUs = async (e) => {
        e.preventDefault();

        // if (
        //     !formData.name ||
        //     !formData.email ||
        //     !formData.phone ||
        //     !formData.service ||
        //     !formData.message
        // ) {
        //     alert("Please fill all required fields");
        //     return;
        // }

        setLoading(true);
        try {
            const response = await contactUs(formData);
            if (response.success === true) {
                alert(response.msg);
                console.log(response.data);
                setFormData({
                    name: "",
                    email: "",
                    service: "",
                    phone: "",
                    message: "",
                });
            } else {
                alert("Please try again");
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleContactChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    return (
        <Fragment>
            <h2>hello login page</h2>
            <Link href={'/'}>Go to home Page</Link>

            <form onSubmit={handleContactUs}>

                <div className="form_pricing_new">
                    <input placeholder="Full name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleContactChange}
                    />
                    <input placeholder="Email address"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleContactChange}
                    />
                    <input placeholder="Phone Number"
                        type="number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleContactChange}
                    />
                    <button>Submit</button>
                </div>
            </form>
        </Fragment>
    )
}