import Image from 'next/image';
import Link from 'next/link';
import databiz from '@/public/client-databiz.svg';
import audiophile from '@/public/client-audiophile.svg';
import maker from '@/public/client-maker.svg';
import meet from '@/public/client-meet.svg';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1>
          <span className={styles.make}>Make</span>
          {' '}
          remote work
        </h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <Link className={styles['learn-more']} href="/">
          Learn more
        </Link>
        <div className={styles.links}>
          <Link href="/" aria-label="databiz">
            <Image className={styles.databiz} src={databiz} alt="" />
          </Link>
          <Link href="/" aria-label="audiophile">
            <Image className={styles.audiophile} src={audiophile} alt="" />
          </Link>
          <Link href="/" aria-label="meet">
            <Image className={styles.meet} src={meet} alt="" />
          </Link>
          <Link href="/" aria-label="maker">
            <Image className={styles.maker} src={maker} alt="" />
          </Link>
        </div>
      </section>
      <picture className={styles.picture}>
        <source media="(max-width: 750px)" srcSet="/image-hero-mobile.png" />
        <Image
          className={styles['hero-img']}
          src="/image-hero-desktop.png"
          width={960}
          height={1280}
          quality={100}
          alt=""
        />
      </picture>
    </main>
  );
}
