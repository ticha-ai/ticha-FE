import { theme } from '@/styles/theme';

import styles from './style.module.css';

const StarIcon = () => {
  return (
    <svg
      className={styles.starIcon}
      viewBox='0 0 12.5 12.5'
      fill={theme.colors.gray['0']}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M9.68779 11.5C8.3318 10.983 7.22926 10.4918 6 9.89718C4.75806 10.4918 3.61751 10.97 2.29954 11.5C2.45161 10.1169 2.59101 8.83725 2.81912 7.49295C1.97005 6.51058 1.32373 5.69624 0.5 4.51998C1.75461 4.23561 2.79378 4.01586 3.95968 3.79612C4.60599 2.65864 5.2523 1.57286 6 0.5C6.7477 1.63749 7.35599 2.63278 8.04032 3.79612C9.20622 3.99001 10.2581 4.22268 11.5 4.51998C10.727 5.61868 10.0173 6.5235 9.18088 7.49295C9.39631 8.83725 9.56106 10.1169 9.68779 11.5Z'
        fill={theme.colors.gray['0']}
      />
    </svg>
  );
};

export default StarIcon;
