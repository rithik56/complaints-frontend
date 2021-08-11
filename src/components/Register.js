import { useRef } from "react";

const Register = () => {
  /**
   * @type {HTMLInputElement}
   */
  const nameRef = useRef();

  /**
   * @type {HTMLInputElement}
   */
  const emailRef = useRef();

  /**
   * @type {HTMLInputElement}
   */
  const passwordRef = useRef();

  /**
   * @type {HTMLInputElement}
   */
  const confirmPwdRef = useRef();

  const validateInputs = () => {
    // test email
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isEmailValid = emailRegex.test(emailRef.current.value);
    // confirm if password and confirm password matches
    const passwordMatches =
      passwordRef.current.value === confirmPwdRef.current.value;
    return isEmailValid && passwordMatches;
  };

  const register = () => {
    if (validateInputs()) {
      // for now only console.log the values
      // but late we can send a post request to backend
      let json = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };

       //note: Logic below is for sending the data to backend 👇👇👇
       
       fetch("register", {
         method: "POST",
         headers: {
           "Content-Type": "application/json"
         }
         ,body: JSON.stringify(json)
       });
       
      console.log(json);
      alert("registration sucessfull");
    }else {
      alert(
        "Please enter a valid email address and make sure password and confirm password match."
      );
    }
  };

  return (
    <section>
      <div className="container py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-registration my-4">
              <div className="row g-0">
                <div className="col-xl-3 d-none d-xl-block">
                  <img
                    src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/img4.jpg"
                    alt="People Gathered Arond"
                    className="img-fluid"
                  />
                </div>
                <div className="col-xl-9">
                  <div className="card-body p-md-5 text-black">
                    <h3 className="mb-5">Register</h3>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            ref={nameRef}
                            type="text"
                            id="form3Example1m"
                            className="form-control form-control-lg"
                            placeholder="Name"
                            autoFocus
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            ref={emailRef}
                            type="email"
                            id="form3Example1m"
                            className="form-control form-control-lg"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            ref={passwordRef}
                            type="password"
                            id="form3Example1m"
                            className="form-control form-control-lg"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            ref={confirmPwdRef}
                            type="password"
                            id="form3Example1m"
                            className="form-control form-control-lg"
                            placeholder="Confirm Password"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-end pt-3">
                      <button
                        type="button"
                        className="btn btn-warning btn-lg ms-2"
                        onClick={register}
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
