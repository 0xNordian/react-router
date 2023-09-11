import { useState } from "react";
import { UseLocalStorage } from "../../hooks/UseLocalStorage";


export default function Contact() {
    const [email, setEmail] = UseLocalStorage("email", "");
    const [message, setMessage] = UseLocalStorage("message", "");
    const [arr, setArr] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create an object with email and message properties
        const formData = {
            email: email,
            message: message,
        };

        // Add the object to the 'arr' array
        setArr([...arr, formData]);

        // Clear the localStorage items
        localStorage.removeItem("email");
        localStorage.removeItem("message");

        // Clear the email and message fields in the state
        setEmail("");
        setMessage("");

        // Handle the form submission logic here or simply update the 'arr' state
    };

    return (
        <div className="contact">
            <h3>Contact Us</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Your email:</span>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        name="email"
                        required
                    />
                </label>
                <label>
                    <span>Your message:</span>
                    <textarea
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        name="message"
                        required
                    ></textarea>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}