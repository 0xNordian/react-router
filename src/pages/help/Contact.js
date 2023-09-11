import { useState, useEffect } from "react";

export default function Contact() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        // Load data from localStorage when the component mounts
        const storedData = JSON.parse(window.localStorage.getItem("contactData"));
        if (storedData) {
            setEmail(storedData.email || "");
            setMessage(storedData.message || "");
        }
    }, []);

    const setLocalStorage = (emailValue, msgValue) => {
        try {
            setEmail(emailValue);
            setMessage(msgValue);

            // Store both email and message as an object in localStorage
            const contactData = { email: emailValue, message: msgValue };
            window.localStorage.setItem("contactDatas", JSON.stringify(contactData));
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Call setLocalStorage to update localStorage with the current values
        setLocalStorage(email, message);
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
