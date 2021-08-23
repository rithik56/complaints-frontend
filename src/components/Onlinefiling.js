import { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { Complaint } from "./Complaint";

import "../css/online-filing.css";

const Onlinefiling = ({ history }) => {
  /**
   * This is used to control the ui.
   * Show the dashboard if user is logged in,
   * otherwise show button to that redirects to login page.
   */
  const { auth } = useAuth();

  const [complaints, setComplaints] = useState([]);

  /**
   * this function will run when the component is first created
   * it will fetch the default information to display which is all the submitted complaints
   * the user has made.
   */
  useEffect(() => {
    // todo: fetch content from backend

    /**
     * The code below is just a simulation on how to get assemble the data.
     */
    setComplaints([
      {
        name: "Test",
        status: "Ongoing",
        timestamp: Date.now(),
        message: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non hendrerit dui. Phasellus sit amet neque erat. Ut eu hendrerit mi. Aliquam et tellus augue. Nunc at lectus vitae libero suscipit mattis. Sed arcu nisl, interdum in rutrum nec, imperdiet id ex. Nam mi turpis, tristique ut velit sit amet, tempus venenatis libero. Vivamus tristique vitae odio nec egestas. Curabitur interdum euismod pulvinar. Sed risus ligula, ultricies vel dignissim ut, tempor et felis. Nam sit amet lobortis neque, quis fringilla elit. Donec iaculis, dolor ut laoreet aliquam, magna risus volutpat orci, id lobortis nulla sem non metus.

Proin quis ligula tempor, maximus elit faucibus, bibendum orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur pellentesque facilisis bibendum. Nulla quis congue nulla, ac pretium lacus. Proin feugiat metus nec maximus pellentesque. Aenean vel luctus purus. In convallis facilisis tortor, ut ultricies justo aliquet a. Aenean fermentum accumsan ipsum eu sollicitudin. Aliquam dui nibh, mollis et tincidunt et, pellentesque sit amet tellus. Fusce nec velit felis. Vivamus dui risus, dictum ut ullamcorper id, consequat et sapien. Etiam urna neque, semper non malesuada non, egestas eget neque. Donec at eros sit amet sem mattis sollicitudin at et ante. Pellentesque convallis semper massa non lobortis. Duis et diam eget sem pretium sagittis.

Nullam accumsan id massa nec porta. In rutrum, massa non congue malesuada, quam felis aliquam risus, nec euismod libero ipsum scelerisque velit. Sed eu vulputate ipsum. Praesent vel orci metus. Praesent ut ex luctus, lacinia tortor eget, dignissim augue. Sed ac turpis gravida, volutpat sem vitae, convallis mi. Ut quis justo lacinia, pharetra sapien eget, pharetra turpis. Nam varius volutpat mollis. Donec aliquet nisi id odio venenatis laoreet.

Mauris sagittis ullamcorper lectus, in aliquet lorem molestie a. Vivamus iaculis consectetur eleifend. Curabitur laoreet, massa nec dignissim pulvinar, lacus nunc porttitor est, ac gravida lacus ligula non nisl. Nulla a lorem euismod, vehicula lacus vel, aliquet urna. In maximus risus blandit, feugiat mauris sed, consectetur leo. Etiam ultrices egestas arcu, ac mollis magna scelerisque et. Morbi iaculis nulla ultricies tortor pulvinar, non malesuada libero faucibus. Maecenas mollis leo velit, nec vulputate ex lobortis sit amet. Nulla viverra interdum lectus a mollis.

Nullam ornare mollis hendrerit. Donec ut facilisis purus. Nulla feugiat, sem nec congue rhoncus, quam metus maximus urna, ut ultricies nibh turpis eget urna. Mauris ut massa ante. Donec eleifend mauris nec tortor convallis, non vulputate ex mollis. Duis ut mauris sit amet massa commodo ornare. Nulla dapibus vel ex at viverra. Donec id vulputate nibh, ut laoreet felis. Praesent finibus dolor quis convallis tempus. Quisque non odio urna. Ut blandit libero lacus, vel semper nibh ultrices et.

Etiam venenatis, nisi ut imperdiet dignissim, nisi lectus tempus erat, eget ornare est mauris non magna. Nulla facilisi. Etiam in diam posuere, facilisis tortor non, faucibus lacus. Vestibulum dignissim ipsum eget rhoncus convallis. Cras eu fermentum ex, a fermentum lorem. Fusce venenatis dui et dui vestibulum molestie. Aliquam erat volutpat. Maecenas interdum nunc felis, non sagittis diam venenatis.
        `,
      },
      {
        name: "Test",
        status: "Ongoing",
        timestamp: Date.now(),
        message: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non hendrerit dui. Phasellus sit amet neque erat. Ut eu hendrerit mi. Aliquam et tellus augue. Nunc at lectus vitae libero suscipit mattis. Sed arcu nisl, interdum in rutrum nec, imperdiet id ex. Nam mi turpis, tristique ut velit sit amet, tempus venenatis libero. Vivamus tristique vitae odio nec egestas. Curabitur interdum euismod pulvinar. Sed risus ligula, ultricies vel dignissim ut, tempor et felis. Nam sit amet lobortis neque, quis fringilla elit. Donec iaculis, dolor ut laoreet aliquam, magna risus volutpat orci, id lobortis nulla sem non metus.

Proin quis ligula tempor, maximus elit faucibus, bibendum orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur pellentesque facilisis bibendum. Nulla quis congue nulla, ac pretium lacus. Proin feugiat metus nec maximus pellentesque. Aenean vel luctus purus. In convallis facilisis tortor, ut ultricies justo aliquet a. Aenean fermentum accumsan ipsum eu sollicitudin. Aliquam dui nibh, mollis et tincidunt et, pellentesque sit amet tellus. Fusce nec velit felis. Vivamus dui risus, dictum ut ullamcorper id, consequat et sapien. Etiam urna neque, semper non malesuada non, egestas eget neque. Donec at eros sit amet sem mattis sollicitudin at et ante. Pellentesque convallis semper massa non lobortis. Duis et diam eget sem pretium sagittis.

Nullam accumsan id massa nec porta. In rutrum, massa non congue malesuada, quam felis aliquam risus, nec euismod libero ipsum scelerisque velit. Sed eu vulputate ipsum. Praesent vel orci metus. Praesent ut ex luctus, lacinia tortor eget, dignissim augue. Sed ac turpis gravida, volutpat sem vitae, convallis mi. Ut quis justo lacinia, pharetra sapien eget, pharetra turpis. Nam varius volutpat mollis. Donec aliquet nisi id odio venenatis laoreet.

Mauris sagittis ullamcorper lectus, in aliquet lorem molestie a. Vivamus iaculis consectetur eleifend. Curabitur laoreet, massa nec dignissim pulvinar, lacus nunc porttitor est, ac gravida lacus ligula non nisl. Nulla a lorem euismod, vehicula lacus vel, aliquet urna. In maximus risus blandit, feugiat mauris sed, consectetur leo. Etiam ultrices egestas arcu, ac mollis magna scelerisque et. Morbi iaculis nulla ultricies tortor pulvinar, non malesuada libero faucibus. Maecenas mollis leo velit, nec vulputate ex lobortis sit amet. Nulla viverra interdum lectus a mollis.

Nullam ornare mollis hendrerit. Donec ut facilisis purus. Nulla feugiat, sem nec congue rhoncus, quam metus maximus urna, ut ultricies nibh turpis eget urna. Mauris ut massa ante. Donec eleifend mauris nec tortor convallis, non vulputate ex mollis. Duis ut mauris sit amet massa commodo ornare. Nulla dapibus vel ex at viverra. Donec id vulputate nibh, ut laoreet felis. Praesent finibus dolor quis convallis tempus. Quisque non odio urna. Ut blandit libero lacus, vel semper nibh ultrices et.

Etiam venenatis, nisi ut imperdiet dignissim, nisi lectus tempus erat, eget ornare est mauris non magna. Nulla facilisi. Etiam in diam posuere, facilisis tortor non, faucibus lacus. Vestibulum dignissim ipsum eget rhoncus convallis. Cras eu fermentum ex, a fermentum lorem. Fusce venenatis dui et dui vestibulum molestie. Aliquam erat volutpat. Maecenas interdum nunc felis, non sagittis diam venenatis.
        `,
      },
      {
        name: "Test",
        status: "Ongoing",
        timestamp: Date.now(),
        message: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non hendrerit dui. Phasellus sit amet neque erat. Ut eu hendrerit mi. Aliquam et tellus augue. Nunc at lectus vitae libero suscipit mattis. Sed arcu nisl, interdum in rutrum nec, imperdiet id ex. Nam mi turpis, tristique ut velit sit amet, tempus venenatis libero. Vivamus tristique vitae odio nec egestas. Curabitur interdum euismod pulvinar. Sed risus ligula, ultricies vel dignissim ut, tempor et felis. Nam sit amet lobortis neque, quis fringilla elit. Donec iaculis, dolor ut laoreet aliquam, magna risus volutpat orci, id lobortis nulla sem non metus.

Proin quis ligula tempor, maximus elit faucibus, bibendum orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur pellentesque facilisis bibendum. Nulla quis congue nulla, ac pretium lacus. Proin feugiat metus nec maximus pellentesque. Aenean vel luctus purus. In convallis facilisis tortor, ut ultricies justo aliquet a. Aenean fermentum accumsan ipsum eu sollicitudin. Aliquam dui nibh, mollis et tincidunt et, pellentesque sit amet tellus. Fusce nec velit felis. Vivamus dui risus, dictum ut ullamcorper id, consequat et sapien. Etiam urna neque, semper non malesuada non, egestas eget neque. Donec at eros sit amet sem mattis sollicitudin at et ante. Pellentesque convallis semper massa non lobortis. Duis et diam eget sem pretium sagittis.

Nullam accumsan id massa nec porta. In rutrum, massa non congue malesuada, quam felis aliquam risus, nec euismod libero ipsum scelerisque velit. Sed eu vulputate ipsum. Praesent vel orci metus. Praesent ut ex luctus, lacinia tortor eget, dignissim augue. Sed ac turpis gravida, volutpat sem vitae, convallis mi. Ut quis justo lacinia, pharetra sapien eget, pharetra turpis. Nam varius volutpat mollis. Donec aliquet nisi id odio venenatis laoreet.

Mauris sagittis ullamcorper lectus, in aliquet lorem molestie a. Vivamus iaculis consectetur eleifend. Curabitur laoreet, massa nec dignissim pulvinar, lacus nunc porttitor est, ac gravida lacus ligula non nisl. Nulla a lorem euismod, vehicula lacus vel, aliquet urna. In maximus risus blandit, feugiat mauris sed, consectetur leo. Etiam ultrices egestas arcu, ac mollis magna scelerisque et. Morbi iaculis nulla ultricies tortor pulvinar, non malesuada libero faucibus. Maecenas mollis leo velit, nec vulputate ex lobortis sit amet. Nulla viverra interdum lectus a mollis.

Nullam ornare mollis hendrerit. Donec ut facilisis purus. Nulla feugiat, sem nec congue rhoncus, quam metus maximus urna, ut ultricies nibh turpis eget urna. Mauris ut massa ante. Donec eleifend mauris nec tortor convallis, non vulputate ex mollis. Duis ut mauris sit amet massa commodo ornare. Nulla dapibus vel ex at viverra. Donec id vulputate nibh, ut laoreet felis. Praesent finibus dolor quis convallis tempus. Quisque non odio urna. Ut blandit libero lacus, vel semper nibh ultrices et.

Etiam venenatis, nisi ut imperdiet dignissim, nisi lectus tempus erat, eget ornare est mauris non magna. Nulla facilisi. Etiam in diam posuere, facilisis tortor non, faucibus lacus. Vestibulum dignissim ipsum eget rhoncus convallis. Cras eu fermentum ex, a fermentum lorem. Fusce venenatis dui et dui vestibulum molestie. Aliquam erat volutpat. Maecenas interdum nunc felis, non sagittis diam venenatis.
        `,
      },
    ]);
  }, []);

  const dashboard = (
    <div className="dashboard">
      <div className="quick-access">
        <div className="item num-of-users">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <p className="highlight">999</p>
          <p className="label">number of users</p>
          <div className="more-info-button">more info</div>
        </div>
        <div className="item total-complaints">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="highlight">999</p>
          <p className="label">total complaints</p>
          <div className="more-info-button">more info</div>
        </div>
        <div className="item resolved-complaints">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="highlight">999</p>
          <p className="label">resolved complaints</p>
          <div className="more-info-button">more info</div>
        </div>
      </div>
      <div className="complaints">
        {/* 
          a list of complaints can be map in here 
          as of now, the only "complaint" will be a fake
          one just to fill the gap and make the ui.
        */}
        {complaints.map(({ name, message, timestamp, status }) => (
          <Complaint
            name={name}
            message={message}
            timestamp={timestamp}
            status={status}
          />
        ))}
      </div>
    </div>
  );

  const loginUI = (
    <>
      <div className="login-ui">
        <h1>please log in to view this page.</h1>
        <button onClick={() => history.push("/login")} className="login-btn">
          Log In
        </button>
      </div>
    </>
  );

  return auth ? dashboard : loginUI;
};
export default Onlinefiling;
