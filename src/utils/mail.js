import axios from "axios";

export const searchContact = async (email) => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_VERIFICATION_URL}/search`, {
        email: email
    });
    return response.data;
};

export const sendEmail = async (data) => {
    await axios.post(`${process.env.NEXT_PUBLIC_VERIFICATION_URL}/send/v2`, data);
};

export const sentEmail = async (email) => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_VERIFICATION_URL}/send?email=${encodeURIComponent(email)}`);
    return response.data.status;
};