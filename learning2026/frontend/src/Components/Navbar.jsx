import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  " style={{color:"white", background:"brown"}}>
      
      <Link className="navbar-brand" to="/">Navbar</Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">

          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/Netflixhome">Netflixhome</Link>
          </li>
{/* 
          <Link className="dropdown-item" to="/CricketTeam">
                Cricket Teams
              </Link>

              <Link className="dropdown-item" style={{textAlign:"center"}} to="/functionaldamo1">
               Functionaldamo1
              </Link>

               <Link className="dropdown-item" style={{textAlign:"center"}} to="/useStateDemp1">
               Usesatatedemo1
              </Link>

               <Link className="dropdown-item" style={{textAlign:"center"}} to="/useStateDemp2">
               Usesatatedemo2
              </Link> */}



              {/* <Link className="dropdown-item" to="/map1">
                Cars
              </Link>

              <Link className="dropdown-item" to="/map2">
                Users
              </Link>

               <Link className="dropdown-item" to="/map3">
                Students
              </Link>

               <Link className="dropdown-item" to="/map4">
                City
              </Link> */}

               <Link className="dropdown-item" to="/OnchangTask">
                OnChange
              </Link>

               <Link className="dropdown-item" to="/EmployeeData">
                EmployeeData
              </Link>

              <Link className="dropdown-item" to="/formdemo1">
                FormDemo1
              </Link>

               {/* <Link className="dropdown-item" to="/Inputdemo1">
                Inputdemo1
              </Link>

              <Link className="dropdown-item" to="/Inputdemo2">
                Inputdemo2
              </Link>

              <Link className="dropdown-item" to="/Inputdemo3">
                Inputdemo3
              </Link> */}


        </ul>
      </div>
    </nav>
  );
};
