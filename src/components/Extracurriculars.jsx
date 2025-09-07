import { motion } from 'framer-motion';

const activities = [
  {
    title: 'Chairperson',
    role: 'IEEE WIE, Kinnaird Branch',
  },
  {
    title: 'Ambassador',
    role: 'ZimoGroups UK',
  },
  {
    title: 'Event Coordinator',
    role: 'ILS’25',
  },
  {
    title: 'Volunteer',
    role: 'GDG Cloud Lahore',
  },
];

function Extracurriculars() {
  return (
    <section style={styles.wrapper} id="extracurriculars">
      <h2 style={styles.heading}>Extracurricular Activities</h2>
      <div style={styles.cardContainer}>
        {activities.map((act, i) => (
          <motion.div
            key={i}
            style={styles.card}
            whileHover={{ rotateY: 180 }}
            transition={{ duration: 0.6 }}
          >
            <div style={styles.cardContent}>
              <h3 style={styles.title}>{act.title}</h3>
              <p style={styles.role}>{act.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  wrapper: {
    padding: '80px 20px',
     backgroundImage: `
    linear-gradient(rgba(0, 0, 20, 0.75), rgba(0, 0, 20, 0.75)),
    url('https://t3.ftcdn.net/jpg/05/14/95/12/360_F_514951224_2dxMLbIw5qNRdPGD003chpbVcxWtcp7K.jpg')
  `,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
    color: 'white',
    textAlign: 'center',
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
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '30px',
    perspective: '1000px',
  },
  card: {
    width: '250px',
    height: '150px',
    background: '#1f2937',
    borderRadius: '15px',
    boxShadow: '0 10px 20px rgba(192, 132, 252, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backfaceVisibility: 'hidden',
  },
  cardContent: {
    padding: '20px',
  },
  title: {
    fontSize: '1.4rem',
    color: '#a78bfa',
    fontWeight: '700',
    marginBottom: '10px',
  },
  role: {
    fontSize: '1rem',
    color: '#e0e7ff',
  },
};

export default Extracurriculars;
