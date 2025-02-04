import { ReactNode } from 'react';

import Footer from '../Footer';
import Navbar from '../Navbar';
import style from './style.module.css';

const ServiceLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={style.container}>
      <Navbar />
      <main className={style.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default ServiceLayout;
