import Image from "next/image";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      Powered by{" "}
      <span className={styles.logo}>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </span>
    </div>
  );
};

export default Footer;
