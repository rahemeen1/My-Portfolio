import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80, damping: 15 }}
        style={{
          ...styles.header,
          background: scrolled
            ? 'linear-gradient(135deg, rgb(0, 26, 68), rgb(68, 35, 99))'
            : 'transparent',
          boxShadow: scrolled ? '0 4px 15px rgba(59, 130, 246, 0.7)' : 'none',
          transition: 'background 0.4s ease, box-shadow 0.4s ease',
        }}
      >
        <div style={styles.container}>
          <h1 style={{ ...styles.logo }}>Rahemeen</h1>

          {/* Desktop Nav */}
          <nav style={styles.nav} className="desktop-nav">
            {navLinks.map((link) => (
              <Button key={link.text} href={link.href} text={link.text} />
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <div style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
            <div style={menuOpen ? styles.barActive : styles.bar} />
            <div style={menuOpen ? styles.barActive : styles.bar} />
            <div style={menuOpen ? styles.barActive : styles.bar} />
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              style={styles.mobileMenu}
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((link) => (
              <motion.a
  key={link.text}
  href={link.href}
  style={styles.mobileLink}
  whileHover={{ scale: 1.05 }}
  onClick={(e) => {
    e.preventDefault();
    const target = document.querySelector(link.href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setTimeout(() => setMenuOpen(false), 1000);
  }}
>
  {link.text}
</motion.a>

              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </AnimatePresence>
  );
}

const navLinks = [
  { href: '#about', text: 'About' },
  { href: '#experience', text: 'Experience' },
  { href: '#skills', text: 'Skills' },
  { href: '#projects', text: 'Projects' },
  { href: '#certifications', text: 'Certifications' },
  { href: '#extracurriculars', text: 'Extracurriculars' },
  { href: '#contact', text: 'Contact' },
];

function Button({ href, text }) {
  return (
    <motion.a
      href={href}
      style={styles.button}
      whileHover={{
        scale: 1.1,
        boxShadow: '0 0 14px 3px rgba(99, 102, 241, 0.9)',
        textShadow: '0 0 10px rgba(139, 92, 246, 1)',
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {text}
    </motion.a>
  );
}

const styles = {
  header: {
    position: 'fixed',
    top: 10,
    width: '100%',
    zIndex: 9999,
    padding: '12px 0',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: 'white',
    letterSpacing: '1.5px',
  },
  nav: {
    display: 'flex',
    gap: '16px',
  },
  button: {
    display: 'inline-block',
    padding: '10px 22px',
    color: 'white',
    fontWeight: '600',
    borderRadius: '30px',
    background: 'linear-gradient(135deg, #4f46e5, #9333ea)',
    textDecoration: 'none',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  hamburger: {
    display: 'none',
    flexDirection: 'column',
    gap: '6px',
    cursor: 'pointer',
  },
  bar: {
    width: '25px',
    height: '3px',
    background: 'white',
    borderRadius: '2px',
    transition: '0.3s',
  },
  barActive: {
    width: '25px',
    height: '3px',
    background: '#9333ea',
    borderRadius: '2px',
    transition: '0.3s',
  },
  mobileMenu: {
    overflow: 'hidden',
    background: '#1e1e2f',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  mobileLink: {
    color: 'white',
    fontSize: '1rem',
    textDecoration: 'none',
    fontWeight: '500',
    padding: '8px 12px',
    borderRadius: '10px',
    background: 'linear-gradient(135deg, #7c3aed, #9333ea)',
  },
};

// Add responsiveness with media query
const mediaStyle = document.createElement('style');
mediaStyle.innerHTML = `
  @media (max-width: 768px) {
    .desktop-nav {
      display: none !important;
    }
    header div[style*='display: flex'] > div:last-child {
      display: flex !important;
    }
  }
`;
document.head.appendChild(mediaStyle);

export default Header;
