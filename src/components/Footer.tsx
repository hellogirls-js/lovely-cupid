import { Link } from "react-router-dom";
import "../styles/main.scss";

export default function Footer() {
  return (
    <footer>
      made by{" "}
      <Link to="https://twitter.com/hellogirls_dev" target="_blank">
        son
      </Link>
    </footer>
  );
}
