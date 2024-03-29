import { useState, useRef } from "react";

const Inquiry = () => {
    const counterRef = useRef(0);
    const inputRef = useRef(null);
    const [contactInfo, setContactInfo] = useState({
        name: "",
        email: "",
        remarks: "",
    });

    const onChange = (e) => {
        counterRef.current++;
        inputRef.current.value = "from Ref";
        setContactInfo({...contactInfo, [e.target.id]: e.target.value});
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(contactInfo);
    }
    return ( 
        <form className="mt-2">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                ref={inputRef}
                type="text"
                className="form-control"
                placeholder="Full name"
                id="name"
                value={contactInfo.name}
                onChange={onChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                type="email"
                className="form-control"
                placeholder="Email..."
                id="email"
                value={contactInfo.email}
                onChange={onChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="remarks">Remarks </label>
                <input
                type="text"
                className="form-control"
                placeholder="Remarks..."
                id="remarks"
                value={contactInfo.remarks}
                onChange={onChange}
                />
            </div>
            <button 
                className="btn btn-primary mt-2"
                disabled={!contactInfo.name || !contactInfo.email}
                onClick={onSubmit}
                >
                    Submit
            </button>
        </form>
     );
}
 
export default Inquiry;