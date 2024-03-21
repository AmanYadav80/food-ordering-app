const Contact=()=>{
    return (
        <div className="contact">
            <h2 className="contact-heading">Contact Us</h2>
            <form className="contact-form" action="https://formspree.io/f/xqkrdygd" method="POST">
                <div className="contact-form-div">
                  <label>Name</label>
                  <input type="text" name="name"/><br></br>
                </div>
                <div className="contact-form-div">
                  <label>Email Address</label>
                  <input type="email" name="email"/><br></br>
                </div>
                <div className="contact-form-div">
                  <label>Message</label>
                  <textarea name="message" cols={30} rows={8}></textarea>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Contact;