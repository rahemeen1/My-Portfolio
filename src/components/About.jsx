import { motion } from 'framer-motion';


function About() {
  return (
    <section style={styles.wrapper} id="about">
      <div style={styles.overlay} />

      <motion.div
        style={styles.container}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {/* Profile Image */}
        <motion.img
          src="/profile.jpg"
          alt="Rahemeen Kamran"
          style={styles.image}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />

        {/* Text Content */}
        <div style={styles.text}>
          <motion.h2
            style={styles.heading}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <span style={styles.nameGlow}>Welcome </span>to my Portfolio!
          </motion.h2>

          <motion.p style={styles.paragraph} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            I'm <strong style={styles.highlight}>Rahemeen Kamran</strong>, a passionate <strong style={styles.highlight}>Computer Scientist</strong> who believes in blending <em>logic</em> with <em>design</em>. I’m constantly learning, growing, and chasing new challenges.
          </motion.p>

          <motion.p style={styles.paragraph} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.8 }}>
            My primary tools are <strong style={styles.highlight}>React</strong>, <strong style={styles.highlight}>JavaScript</strong>, and <strong style={styles.highlight}>creativity</strong>. I love crafting digital experiences that not only work — but leave a lasting impression.
          </motion.p>
         <motion.p
  style={{
    ...styles.paragraph,
    fontWeight: '600',
    fontSize: '1.25rem',
    color: '#f1f5f9',
  }}
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.7 }}
>
  <span style={styles.eduLabel}>Education:</span> CGPA 3.61 / 4.00
</motion.p>
<motion.p
  style={{
    ...styles.paragraph,
    fontSize: '1.15rem',
    color: '#cbd5e1',
  }}
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.8 }}
>
  BSc in Computer Science, Kinnaird College for Women
</motion.p>

          <motion.p style={styles.quote} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1 }}>
            <em>"Code is my canvas. Creativity is my fuel."</em>
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}

const styles = {
  wrapper: {
    position: 'relative',
    padding: '120px 20px',
     backgroundImage: 'url(https://img.freepik.com/free-vector/gradient-connection-background_23-2150518080.jpg?semt=ais_hybrid&w=740)', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    background: 'rgba(0, 0, 20, 0.75)',
    zIndex: 2,
  },
  container: {
    position: 'relative',
    zIndex: 3,
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'flex',
    gap: '40px',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  image: {
    width: '250px',
    height: '250px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid #60a5fa',
    boxShadow: '0 0 30px rgba(96, 165, 250, 0.6)',
  },
  text: {
    flex: 1,
    minWidth: '300px',
  },
  heading: {
    fontSize: '3rem',
    fontWeight: '700',
    marginBottom: '25px',
    fontFamily: `'Poppins', sans-serif`,
    letterSpacing: '1px',
    color: 'white',
  },
  nameGlow: {
    background: 'linear-gradient(90deg, #60a5fa, #c084fc)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 0 20px rgba(192,132,252,0.3)',
  },
  eduLabel: {
  color: '#c084fc',
  fontSize: '1.3rem',
  fontWeight: '700',
  marginRight: '8px',
},

  paragraph: {
    fontSize: '1.2rem',
    lineHeight: '2',
    color: '#e0e7ff',
    fontFamily: `'Open Sans', sans-serif`,
    marginBottom: '18px',
    letterSpacing: '0.3px',
  },
  highlight: {
    color: '#c084fc',
    fontWeight: '600',
  },
  quote: {
    fontSize: '1.1rem',
    fontStyle: 'italic',
    color: '#94a3b8',
    marginTop: '20px',
    borderLeft: '3px solid #6366f1',
    paddingLeft: '15px',
  },
};

export default About;
