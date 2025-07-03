import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'React Developer (Internship)',
    company: 'TenX Software Limited',
    duration: 'July 24 - August 24',
    description:
      'Developed dynamic web applications using JavaScript and React, improving front-end skills and writing maintainable code.',
    certificateLink: 'https://drive.google.com/file/d/17olUPaaQBHBL7dHorQZ82y51IhvoEowa/view?usp=sharing',
  },
  {
    title: 'Backend Developer (C# & .NET)',
    company: 'TenX Software Limited',
    duration: 'July 23 - August 23',
    description:
      'Developed projects like Tic Tac Toe and banking management system with MySQL and Windows Forms.',
    certificateLink: 'https://drive.google.com/file/d/1IahrCHuinovU01A6dYkVCHodiYBT3UFN/view?usp=sharing',
  },
  {
    title: 'Graphic Designer',
    company: 'GDG Cloud Lahore (Volunteer)',
    duration: 'June 25 - Present',
    description:
      'Designed visuals and contributed to branding and event materials.',
    certificateLink: 'https://drive.google.com/file/d/19RWWUFNabUTpXuncq2A8QVk7u8paTRXl/view?usp=drive_link',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

function Experience() {
  return (
    <section style={styles.wrapper} id="experience">
      <div style={styles.overlay} />
      <motion.div
        style={styles.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 style={styles.heading}>Professional Experience</h2>

        <div style={styles.cardsGrid}>
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              style={styles.card}
              custom={i}
              variants={cardVariants}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px #9333ea' }}
              transition={{ type: 'spring', stiffness: 120 }}
            >
              <h3 style={styles.jobTitle}>{exp.title}</h3>
              <p style={styles.company}>{exp.company}</p>
              <p style={styles.duration}>{exp.duration}</p>
              <p style={styles.description}>{exp.description}</p>
<div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
  {exp.title !== 'Graphic Designer' && (
    <motion.a
      href={exp.certificateLink}
      target="_blank"
      rel="noopener noreferrer"
      style={styles.button}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      View Certificate
    </motion.a>
  )}

  {exp.title === 'Graphic Designer' && (
    <motion.a
      href="https://drive.google.com/file/d/19RWWUFNabUTpXuncq2A8QVk7u8paTRXl/view?usp=drive_link"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        ...styles.button,
        background: '   #9333ea',
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      View Portfolio
    </motion.a>
  )}
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
    position: 'relative',
    padding: '80px 20px',
    background: '#1e293b',
    color: '#e0e7ff',
    zIndex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: '#000014',
    zIndex: 2,
  },
  container: {
    position: 'relative',
    zIndex: 3,
    maxWidth: '1200px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '2.6rem',
    fontWeight: '700',
    marginBottom: '50px',
    textAlign: 'center',
    background: 'linear-gradient(90deg, #60a5fa, #c084fc)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 0 20px rgba(192,132,252,0.3)',
    fontFamily: `'Poppins', sans-serif`,
  },
  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
  },
  card: {
    background: 'rgba(31, 41, 55, 0.85)',
    padding: '30px 25px',
    borderRadius: '20px',
    boxShadow: '0 0 20px rgba(201, 128, 252, 0.3)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '320px',
  },
  jobTitle: {
    fontSize: '1.3rem',
    fontWeight: '700',
    marginBottom: '8px',
    color: '#a78bfa',
  },
  company: {
    fontSize: '1.1rem',
    fontWeight: '600',
    marginBottom: '6px',
    color: '#c4b5fd',
  },
  duration: {
    fontSize: '0.95rem',
    fontStyle: 'italic',
    marginBottom: '15px',
    color: '#9ca3af',
  },
  description: {
    fontSize: '1rem',
    lineHeight: '1.5',
    color: '#d1d5db',
    flexGrow: 1,
  },
  button: {
    marginTop: '20px',
    alignSelf: 'flex-start',
    padding: '10px 24px',
    fontSize: '0.95rem',
    fontWeight: '700',
    color: 'white',
    borderRadius: '30px',
    background: 'linear-gradient(135deg, #7c3aed, #9333ea)',
    boxShadow: '0 0 15px #9333ea',
    textDecoration: 'none',
    cursor: 'pointer',
    userSelect: 'none',
  },
};

export default Experience;
