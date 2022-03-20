import { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";
import NavAppBar from "../NavAppBar";
import styles from "./Layout.module.css";

const Layout = (props: any) => {
  const { children, pageTitle } = props;
  return (
    <div className={styles.container}>
      <Header pageTitle={pageTitle} />
      <NavAppBar />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
