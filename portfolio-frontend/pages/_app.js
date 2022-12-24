import Layout from '../layout/Layout'
import { motion, AnimatePresence } from 'framer-motion'
import '../styles/globals.css'
import { useEffect } from 'react'
import { fadeIn } from '../utils/animations'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {

  const router = useRouter()

    useEffect(() => {
      if (typeof window !== 'undefined') {
              const loader = document.getElementById('globalLoader');
          if (loader)
              loader.style.display = 'none';
      }
    }, []);

  return (
    <>
    <AnimatePresence exitBeforeEnter>
      <Layout>
        <motion.div
          key={router.route}
          initial='initialState'
          animate='animateState'
          exit='exitState'
          transition={{
            duration: 0.75,
          }}
          variants={{
            fadeIn
          }}
        >
        <Component {...pageProps} />
        </motion.div>
      </Layout>
    </AnimatePresence>
    </>
  )
}

export default MyApp

