import { FC, PropsWithChildren } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
