import React from "react";

const Contactus = () => {
  return (
    <div>
      <div class="form4 top">
        <div class="container">
          <div class="row">
            <div class="col-md-7 col-md-offset-2">
              <div class="form-bg">
                <form class="form">
                  <div class="form-group">
                    {" "}
                    <label class="sr-only">Name</label>{" "}
                    <input
                      type="text"
                      class="form-control"
                      required=""
                      id="nameNine"
                      placeholder="Your Name"
                    />{" "}
                  </div>
                  <div class="form-group">
                    {" "}
                    <label class="sr-only">Email</label>{" "}
                    <input
                      type="email"
                      class="form-control"
                      required=""
                      id="emaiNine"
                      placeholder="Email Address"
                    />{" "}
                  </div>
                  <div class="form-group">
                    {" "}
                    <label class="sr-only">password</label>{" "}
                    <input
                      type="password"
                      class="form-control"
                      required=""
                      id="pword"
                      placeholder="enter your password"
                    />{" "}
                  </div>
                  <div class="form-group">
                    {" "}
                    <label class="sr-only">issue</label>{" "}
                    <textarea
                      class="form-control"
                      required=""
                      rows="7"
                      id="messageNine"
                      placeholder="Write your issue"
                    ></textarea>{" "}
                  </div>{" "}
                  <button type="submit" class="btn text-center btn-blue">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
