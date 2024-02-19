import axios from "axios";

export const contactUs = async (formData) => {
    try {
        const responseContact = await axios.post(`https://celetel-testing.onrender.com/api/contactUs`,
            formData
        );
        console.log(responseContact.data, "reponseContact");
        return responseContact.data;
    }
    catch (error) {
        console.log("Contact error", error.msg)
        throw error;
    }

}