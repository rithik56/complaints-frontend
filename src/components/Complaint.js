import "../css/complaint.css";

export const Complaint = ({ name, message, timestamp, status }) => {
  return (
    <div className="complaint">
      <div className="basic-info">
        <p className="name">
          By: <span>{name}</span>
        </p>
        <p className="timestamp">
          Created On: <span>{new Date(timestamp).toDateString()}</span>
        </p>
        <p className="status">
          Status: <span>{status}</span>
        </p>
      </div>
      <div className="message-container">
        <p className="message">{message}</p>
      </div>
    </div>
  );
};
