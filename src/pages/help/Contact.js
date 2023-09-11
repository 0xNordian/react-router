import { UseLocalStorage } from "../../hooks/UseLocalStorage";


export default function Contact() {
    const [email, setEmail] = UseLocalStorage("email", "");
    const [message, setMessage] = UseLocalStorage("message", "");

    return (
        <div className="contact">
            <h3>Contact Us</h3>
            <form>
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