import axios from "axios";

export const LoginPage = (props: {
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const fetchData = async () => {
    // ?
    const results = await axios.get("http://localhost:5000/getAssignments");

    props.setLoggedIn(true);
    return results;
  };

  return (
    <div className="loginParent">
      <div className="loginChild mainBG">
        <img
          src="/student-tasker/studentTasker2.png"
          alt=""
          className="loginIcon"
        />
        <button
          className="button ascend secondaryBG"
          onClick={() => props.setLoggedIn(true)}
        >
          {" "}
          Continue{" "}
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
