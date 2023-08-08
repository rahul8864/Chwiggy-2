import { useState } from "react";


const Contact = () => {
  const [message, setMessage] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }
  return (
    <div className="contact-container">
      <div className="contact-left">
      <img width={470} src="https://img.freepik.com/free-vector/woman-working-laptop_23-2148503681.jpg?w=740&t=st=1691513470~exp=1691514070~hmac=9adea83a316963ad6c7e0d0c74670587b0cf3cf00628a79a6cf13306f6b27b7e" alt="" />
      </div>
      <div className="contact-right">
      <h1>Contact us</h1>
                <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" required/>
                    <input type="email" placeholder="Email" required/>
                    <textarea placeholder="Type your Message here..." required></textarea>
                    <button type="submit">Submit</button>
                    {message && <span>Thanks for contacting Chwiggy, We will reply ASAP.</span>}
                </form>
      </div>
    </div>
  );
};

export default Contact;
