import { motion } from 'framer-motion';

const certifications = [
  {
    title: 'Google UX Design',
    provider: 'Coursera',
    image: '/Google.jpg',
    link: '/certificates/google-ux.pdf',
  },
  {
    title: 'Google AI Essentials',
    provider: 'Coursera',
    image: '/Google.jpg',
    link: '/certificates/google-ai.pdf',
  },
  {
    title: 'Google Prompt Essentials',
    provider: 'Coursera',
    image: '/Google.jpg',
    link: '/certificates/google-ai.pdf',
  },
  {
    title: 'Responsive Web Design',
    provider: 'freeCodeCamp',
    image: 'freecode.png',
    link: 'https://drive.google.com/file/d/1zHYh4pS6rrNFx2q7F26eTo2UdOSYgRAG/view?usp=sharing',
  },
];

function Certifications() {
  return (
    <section style={styles.wrapper} id="certifications">
      <h2 style={styles.heading}>Certifications</h2>

      <div style={styles.grid}>
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            style={styles.card}
            whileHover={{ scale: 1.08, rotate: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <div style={styles.circle}>
              <img src={cert.image} alt={cert.title} style={styles.image} />
            </div>
            <h3 style={styles.title}>{cert.title}</h3>
            <p style={styles.provider}>{cert.provider}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.button}
            >
              View Certificate
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  wrapper: {
    padding: '100px 20px',
    background: '#000014',
    textAlign: 'center',
  },
  heading: {
    marginTop: '-10px',
    fontSize: '3rem',
    fontWeight: '700',
    marginBottom: '50px',
    fontFamily: `'Poppins', sans-serif`,
    color: '#c084fc',
    textAlign: 'center',
      background: 'linear-gradient(90deg, #60a5fa, #c084fc)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 0 20px rgba(192,132,252,0.3)',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '40px',
  },
  card: {
    width: '220px',
    padding: '20px',
    borderRadius: '20px',
    background: '#1e293b',
    boxShadow: '0 0 30px rgba(192, 132, 252, 0.3)',
    border: '2px solid #9333ea',
    textAlign: 'center',
  },
  circle: {
    width: '120px',
    height: '120px',
    margin: '0 auto 15px',
    borderRadius: '50%',
    overflow: 'hidden',
    border: '4px solid #c084fc',
    boxShadow: '0 0 15px rgba(192, 132, 252, 0.7)',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '80%',
    height: '80%',
    objectFit: 'contain',
  },
  title: {
    fontSize: '1rem',
    fontWeight: 700,
    color: '#e0e7ff',
    margin: '10px 0 4px',
  },
  provider: {
    fontSize: '0.85rem',
    color: '#a5b4fc',
    marginBottom: '12px',
  },
  button: {
    fontSize: '0.9rem',
    padding: '8px 20px',
    borderRadius: '30px',
    background: 'linear-gradient(135deg, #7c3aed, #9333ea)',
    color: '#fff',
    fontWeight: 600,
    textDecoration: 'none',
    display: 'inline-block',
    marginTop: '10px',
    boxShadow: '0 0 12px #9333ea',
    transition: 'all 0.3s ease',
  },
};

export default Certifications;
