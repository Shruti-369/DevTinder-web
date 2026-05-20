import logo from "./assets/logo.png";
import { useSelector } from "react-redux";

const NavBar = () => {

  const user = useSelector((store) => store.user);
  console.log(user);

  return (
    <div className="navbar bg-base-200 border-b border-base-300 px-4">
      <div className="flex-1 ">
        <a className="btn btn-ghost text-xl">
          <img src={logo} alt="DevTinder Logo" className="w-full h-full object-cover" /> DevTinder
        </a>
      </div>

      {user && (
        <div className="flex items-center gap-2 mr-4">

          <p className="text-[14px]">
            Welcome, {user.firstName}
          </p>

          <div className="dropdown dropdown-end pr-4">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar">

              <div className="w-10 rounded-full overflow-hidden border border-[#163647]">

                <img
                  className="w-full h-full object-cover"
                  alt="profile"
                  src={
                    user?.photoUrl ||
                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                  onError={(e) => {
                    e.target.src =
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp";
                  }}
                />

              </div>

            </div>

            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>

          </div>
        </div>
      )}

    </div>
  )
}

export default NavBar;
