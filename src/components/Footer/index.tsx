import React from 'react';

import styles from './style.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerLayout} aria-label='footer'>
      <FooterMenu />
      <Copyright />
    </footer>
  );
};

export default Footer;

const footerItems = [
  '개인정보처리방침',
  '공지사항',
  '자주 묻는 질문',
  '고객센터',
];

const FooterMenu = () => {
  return (
    <ul className={styles.footerList}>
      {footerItems.map((item, index) => (
        <React.Fragment key={item}>
          <FooterItem>{item}</FooterItem>
          {index < footerItems.length - 1 && <FooterDivider />}
        </React.Fragment>
      ))}
    </ul>
  );
};

// 추후에 링크 추가 필요
const FooterItem = ({ children }: { children: React.ReactNode }) => {
  return <li className={styles.footerItem}>{children}</li>;
};

const FooterDivider = () => {
  return <div className={styles.footerDivider} />;
};

const Copyright = () => {
  return <p>Copyright © Ticha.All Rights Reserved.</p>;
};
