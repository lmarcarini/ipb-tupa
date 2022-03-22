import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import styles from "./MediaBar.module.css";

type Props = {};

const MediaBar = (props: Props) => {
  return (
    <>
      <a
        className={styles.icons}
        href="https://www.facebook.com/ipbtupa/"
        aria-label="Facebook"
      >
        <FontAwesomeIcon icon={faFacebook} height={45} className="me-3 ms-3" />
      </a>
      <a
        className={styles.icons}
        href="https://www.youtube.com/channel/UCykBMRt8Vo7d5NUDiaR1DHQ"
        aria-label="Youtube"
      >
        <FontAwesomeIcon icon={faYoutube} height={45} className="me-3 ms-3" />
      </a>
    </>
  );
};

export default MediaBar;
