import classes from "./Navigation.module.css"
const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          Users
        </li>
        <li>
          Admin
        </li>
        <li>
          <button>Logout</button>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;