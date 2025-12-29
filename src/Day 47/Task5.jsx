import { useNavigate } from "react-router-dom";

function RedirectButton() {
  const navigate = useNavigate();

  const goToUser = () => {
    navigate("/user/10"); // redirect to dynamic route
  };

  return (
    <button onClick={goToUser}>
      Go to User 10
    </button>
  );
}

export default RedirectButton;
