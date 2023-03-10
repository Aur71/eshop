import styles from '../styles/layout/Layout.module.scss';

// COMPONENETS
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Menu from './Menu';
import Overlay from './Overlay';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Menu />
      <Overlay />
      <main className={styles.layout}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
