import { useRef } from "react";
import "../css/cntus.css";

const Contactus = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const issueRef = useRef();

  const send = () => {
    // test email
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isEmailValid = emailRegex.test(emailRef.current.value);

    if (!isEmailValid) return alert("Please enter a valid email address.");

    if (!nameRef.current.value) return alert("Please enter a valid name.");

    if (!issueRef.current.value)
      return alert("Please do not leave issue blank.");

    // for now we only long the input values in console
    let json = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      issue: issueRef.current.value,
    };
    // console.log(json);

    // later we can submit the data to backend endpoint
    // using the code 👇👇👇
     fetch("/contactus", {
       method: 'POST',
       headers: {
         "Content-Type": "application/json"
       },
       body: JSON.stringify(json),
     }).then(res => {
       alert("your response has been sent sucessfully");
       console.log(res.body);
       res.status(201).send("users response has been taken sucessfully")
       console.log("users response has been taken sucessfully")
       // manage response from backend.


     })
       .catch(console.error); // log the error in console
  };

  return (
    <div className="container py-5">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
          <div className="card card-registration my-4">
            <div className="row g-0">
              <div className="col-xl-12">
                <div className="card-body p-md-5 text-black">
                  <h3 className="mb-5">Contact Us</h3>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                        name="name"
                          ref={nameRef}
                          type="text"
                          id="form3Example1m"
                          className="form-control form-control-lg"
                          placeholder="Enter your name"
                          autoFocus
                        />
                        <label htmlFor="name field" className="form-label">
                    
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                        name="email"
                          ref={emailRef}
                          type="email"
                          id="form3Example1m"
                          className="form-control form-control-lg"
                          placeholder="Enter your email address"
                        />
                        <label htmlFor="email field" className="form-label">
                          Email
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12 mb-4">
                      <div className="form-outline">
                        <label htmlFor="issue field" className="form-label">
                          Issue
                        </label>
                        <textarea
                        name="issue"
                          ref={issueRef}
                          className="form-control"
                          required=""
                          rows="7"
                          id="messageNine"
                          placeholder="Write your issue"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-end pt-3">
                    <button
                      type="button"
                      className="btn btn-warning btn-lg ms-2"
                      onClick={send}
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
