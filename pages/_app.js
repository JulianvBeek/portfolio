import '../styles/globals.css'
import { motion } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  return (
    <div className="test">
    <motion.div
      key={router.route}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={{
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
        exit: {
          opacity: 0, 
        }
      }}
      transition={{type: 'linear' }}
    >
      <Component {...pageProps} />
    </motion.div>
    </div>
  );
}

export default MyApp
