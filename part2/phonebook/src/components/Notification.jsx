const Notification = (props) => {
  if (props.message == null) {
    return null;
  } else {
    const color = props.type === "success" ? "green" : "red";
    const notificationStyling = {
      color: color,
      background: "lightgrey",
      fontSize: "20px",
      borderStyle: "solid",
      borderRadius: "5px",
      padding: "10px",
      marginBottom: "10px",
    };
    return (
      <div style={notificationStyling}>
        <p>{props.message}</p>
      </div>
    );
  }
};

export default Notification;
