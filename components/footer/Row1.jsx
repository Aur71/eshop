import styles from '../../styles/layout/Footer.module.scss';

// TOOLS
import Link from 'next/link';
import Image from 'next/image';

// MEDIA
import logo from '../../public/logo.png';

const Row1 = () => {
  return (
    <section className={styles.row1}>
      <Link href='/' className={styles.logo}>
        <Image src={logo} alt='logo' />
      </Link>

      <ul>
        <li>
          <Link href='#'>terms & conditions</Link>
        </li>
        <li>
          <Link href='#'>privacy policy</Link>
        </li>
        <li>
          <Link href='#'>faq</Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link href='#'>blog</Link>
        </li>
        <li>
          <Link href='#'>forum</Link>
        </li>
        <li>
          <Link href='#'>support</Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link href='/'>home</Link>
        </li>
        <li>
          <Link href='/about'>about</Link>
        </li>
        <li>
          <Link href='/contact'>contact</Link>
        </li>
      </ul>
    </section>
  );
};

export default Row1;
