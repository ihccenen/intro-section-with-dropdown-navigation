'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo.svg';
import menu from '@/public/icon-menu.svg';
import close from '@/public/icon-close-menu.svg';
import todo from '@/public/icon-todo.svg';
import calendar from '@/public/icon-calendar.svg';
import reminders from '@/public/icon-reminders.svg';
import planning from '@/public/icon-planning.svg';
import styles from './Header.module.css';

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen((prev) => !prev);

  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        <Image src={logo} alt="snap" />
      </Link>
      <button
        className={styles['menu-btn']}
        type="button"
        onClick={handleClick}
        aria-label="menu"
      >
        <Image src={menu} alt="" />
      </button>
      <nav className={`${styles.nav} ${open ? '' : styles.hidden}`}>
        <ul>
          <li className={styles.features}>
            <Link href="/">Features</Link>
            <ul className={styles['sub-menu']}>
              <li>
                <Link href="/">
                  <Image className={styles.icon} src={todo} alt="" />
                  Todo List
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Image className={styles.icon} src={calendar} alt="" />
                  Calendar
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Image className={styles.icon} src={reminders} alt="" />
                  Reminders
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Image className={styles.icon} src={planning} alt="" />
                  Planning
                </Link>
              </li>
            </ul>
          </li>
          <li className={styles.company}>
            <Link href="/">Company</Link>
            <ul className={styles['sub-menu']}>
              <ul>
                <li>
                  <Link href="/">History</Link>
                </li>
                <li>
                  <Link href="/">Our Team</Link>
                </li>
                <li>
                  <Link href="/">Blog</Link>
                </li>
              </ul>
            </ul>
          </li>
          <li>
            <Link href="/">Careers</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li className={styles.login}>
            <Link href="/">Login</Link>
          </li>
          <li className={styles.register}>
            <Link href="/">Register</Link>
          </li>
        </ul>
        <button
          className={styles['close-menu-btn']}
          type="button"
          onClick={handleClick}
          aria-label="close menu"
        >
          <Image src={close} alt="" />
        </button>
      </nav>
      {open && <div className={styles.overlay} />}
    </header>
  );
}
