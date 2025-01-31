import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li
            onMouseEnter={() => handleMouseEnter('opcao1')}
            onMouseLeave={handleMouseLeave}>
            <Link href="#">Opção 1</Link>
            {activeMenu === 'opcao1' && (
              <ul className={styles.submenu}>
                <li><Link href="#">Subopção 1.1</Link></li>
                <li><Link href="#">Subopção 1.2</Link></li>
              </ul>
            )}
          </li>
          <li
            onMouseEnter={() => handleMouseEnter('opcao2')}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="#">Opção 2</Link>
            {activeMenu === 'opcao2' && (
              <ul className={styles.submenu}>
                <li><Link href="#">Subopção 2.1</Link></li>
                <li><Link href="#">Subopção 2.2</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;