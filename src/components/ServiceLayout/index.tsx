import { ReactNode } from 'react';

import Navbar from '../Navbar';
import style from './style.module.css';

const ServiceLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={style.container}>
      <Navbar />
      <main className={style.main}>{children}</main>
      {/* footer */}
    </div>
  );
};

export default ServiceLayout;
