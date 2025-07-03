function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} Rahemeen. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    padding: '10px',
    textAlign: 'center',
    backgroundImage: `
    linear-gradient(rgba(0, 0, 20, 0.75), rgba(0, 0, 20, 0.75)),
    url('https://t3.ftcdn.net/jpg/05/14/95/12/360_F_514951224_2dxMLbIw5qNRdPGD003chpbVcxWtcp7K.jpg')
  `,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
    color: 'white',
  },
};

export default Footer;
