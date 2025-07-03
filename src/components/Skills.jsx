import { motion } from 'framer-motion';

const skills = [
  { name: 'React', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'CSS / Tailwind', level: 80 },
  { name: 'Redux', level: 65 },
  { name: 'Figma', level: 70 },
  { name: 'Canva Pro', level: 90 },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const barVariants = {
  hidden: { width: 0, opacity: 0.3 },
  visible: (level) => ({
    width: `${level}%`,
    opacity: 1,
    transition: { duration: 1.2, ease: 'easeOut' },
  }),
};

function Skills() {
  return (
    <section style={styles.wrapper} id="skills">
      <motion.div
        style={styles.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <h2 style={styles.heading}>Skills & Expertise</h2>
        <p style={styles.subheading}>
          A blend of coding, design, and creativity powering my projects.
        </p>

        <div style={styles.skillsGrid}>
          {skills.map(({ name, level }, i) => (
            <motion.div
              key={i}
              style={styles.skillCard}
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px #c084fc' }}
              transition={{ type: 'spring', stiffness: 120 }}
            >
              <div style={styles.skillHeader}>
                <span style={styles.skillName}>{name}</span>
                <span style={styles.skillLevel}>{level}%</span>
              </div>

              <div style={styles.progressBar}>
                <motion.div
                  style={styles.progressFill}
                  variants={barVariants}
                  custom={level}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

const styles = {
  wrapper: {
    padding: '10px 10px',
    background: '#000014',
    color: '#e0e7ff',
    minHeight: '100vh',
    fontFamily: `'Poppins', sans-serif`,
  },
  container: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  heading: {

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
  subheading: {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#a78bfa',
    marginBottom: '40px',
    fontWeight: '500',
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
  },
  skillCard: {
    background: 'rgba(31, 41, 55, 0.9)',
    borderRadius: '18px',
    padding: '25px 20px',
    boxShadow: '0 0 25px rgba(192, 132, 252, 0.3)',
    display: 'flex',
    flexDirection: 'column',
  },
  skillHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '12px',
  },
  skillName: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#ddd6fe',
  },
  skillLevel: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#a78bfa',
  },
  progressBar: {
    height: '12px',
    width: '100%',
    background: '#4b5563',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    background:
      'linear-gradient(90deg, #7c3aed, #9333ea)', // beautiful purple gradient fill
    borderRadius: '10px',
  },
};

export default Skills;
