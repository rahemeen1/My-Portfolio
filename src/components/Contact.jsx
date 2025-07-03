import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <section style={styles.wrapper} id="contact">
      <motion.div
        style={styles.container}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 style={styles.heading}>Get in Touch</h2>

        <div style={styles.infoBox}>
          <div style={styles.infoItem}>
            <FaMapMarkerAlt style={styles.icon} />
            <span>Lahore, Pakistan</span>
          </div>

          <div style={styles.infoItem}>
            <FaEnvelope style={styles.icon} />
            <a href="mailto:rahemeenkamran1@gmail.com" style={styles.link}>
              rahemeenkamran1@gmail.com
            </a>
          </div>

          <div style={styles.infoItem}>
            <FaLinkedin style={styles.icon} />
            <a
              href="https://www.linkedin.com/in/rahemeenkamran"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              Rahemeen Kamran
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

const styles = {
  wrapper: {
    padding: '80px 20px',
   background: '#000014',
    color: '#e0e7ff',
    minHeight: '50vh',
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.8rem',
    fontWeight: '700',
    marginBottom: '40px',
    background: 'linear-gradient(90deg, #60a5fa, #c084fc)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 0 20px rgba(192,132,252,0.3)',
  },
  infoBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '25px',
  },
  infoItem: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.2rem',
    gap: '10px',
  },
  icon: {
    color: '#c084fc',
    fontSize: '1.5rem',
  },
  link: {
    color: '#93c5fd',
    textDecoration: 'none',
  },
};

export default Contact;
