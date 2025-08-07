import { motion } from 'framer-motion';

const projects = [
  {
    title: 'IEEE KSB Website',
    description: 'Modern portfolio using React & Framer Motion.',
    image: '/project-1.png',
    github: 'https://github.com/IEEE-Kinnaird/IEEE-KSB-Website',
    demo: 'https://6730bd89d83707a80a8b6795--ieee-kinnaird.netlify.app/',
    tech: ['React', 'Netlify'],
  },
  {
    title: 'NeedNest',
    description: 'Donation platform connecting those in need with donors with fully functional backend.',
    image: '/project-2.png',
    github: 'https://github.com/rahemeen1/NeedNest-FullStack',
    demo: 'https://neednest.netlify.app/',
    tech: ['React', 'API', 'CSS'],
  },
  {
    title: 'EightyEight Salon',
    description: 'Online platform for salon services.',
    image: '/project-3.png',
    github: 'https://github.com/rahemeen1/EightyEightSalon',
    demo: 'https://eightyeightsalon.netlify.app/',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },

];

function Projects() {
  return (
    <motion.section
      id="projects"
      style={styles.section}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        style={styles.heading}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
       <span style={styles.nameGlow}>My Projects</span>
      </motion.h2>

      <motion.div
        style={styles.grid}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            style={styles.card}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 20px rgba(96, 165, 250, 0.3)',
            }}
            transition={{ duration: 0.4 }}
          >
            <img src={proj.image} alt={proj.title} style={styles.image} />
            <h3 style={styles.title}>{proj.title}</h3>
            <p style={styles.description}>{proj.description}</p>

            <div style={styles.tags}>
              {proj.tech.map((tag, idx) => (
                <span key={idx} style={styles.tag}>{tag}</span>
              ))}
            </div>

            <div style={styles.buttons}>
              <motion.a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...styles.button, ...styles.code }}
                whileHover={{ scale: 1.05 }}
              >
                View Code
              </motion.a>
              <motion.a
                href={proj.demo}
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...styles.button, ...styles.demo }}
                whileHover={{ scale: 1.05 }}
              >
                Live Demo
              </motion.a>
            </div>
            
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

const styles = {
 section: {
  padding: '10px 20px',
  backgroundImage: `
    linear-gradient(rgba(0, 0, 20, 0.75), rgba(0, 0, 20, 0.75)),
    url('https://t3.ftcdn.net/jpg/05/14/95/12/360_F_514951224_2dxMLbIw5qNRdPGD003chpbVcxWtcp7K.jpg')
  `,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
},

  heading: {
    fontSize: '2.8rem',
    textAlign: 'center',
   
    marginBottom: '50px',
    color: '#7dd3fc',
    fontFamily: `'Poppins', sans-serif`,
    letterSpacing: '1px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: '#1e293b',
    borderRadius: '14px',
    padding: '20px',
    transition: 'transform 0.3s, box-shadow 0.3s',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '15px',
    border: '2px solid #1d4ed8',
  },
  title: {
    fontSize: '1.5rem',
    color: '#e0e7ff',
    marginBottom: '10px',
  },
  description: {
    fontSize: '0.95rem',
    color: '#cbd5e1',
    marginBottom: '10px',
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '15px',
  },
   nameGlow: {
    background: 'linear-gradient(90deg, #60a5fa, #c084fc)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 0 20px rgba(192,132,252,0.3)',
  },
  tag: {
    backgroundColor: '#334155',
    color: '#7dd3fc',
    padding: '5px 10px',
    borderRadius: '999px',
    fontSize: '0.75rem',
    fontWeight: '500',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '12px',
  },
  button: {
    flex: 1,
    padding: '10px 12px',
    borderRadius: '8px',
    textAlign: 'center',
    fontWeight: '600',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '0.95rem',
  },
  code: {
    background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
  },
  demo: {
    background: 'linear-gradient(135deg, #9333ea, #a855f7)',
  },
};

export default Projects;
