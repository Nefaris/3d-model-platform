import { FC, PropsWithChildren } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

type Props = PropsWithChildren<{
  type?: 'default' | 'dashboard';
}>;

const Layout: FC<Props> = ({ type = 'default', children }) => {
  if (type === 'dashboard') {
    return (
      <>
        <Navbar />
        {children}
      </>
    );
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
