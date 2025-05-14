import React from 'react';
import { motion } from 'framer-motion';
import './CSS/AboutUs.css';
import HeroSection from './PageComponents/About/HeroSection';
import AboutInfo from './PageComponents/About/AboutInfo';
import Prawas from './PageComponents/About/Prawas';
import Udistay from './PageComponents/About/Udishtay';
import Niyojit from './PageComponents/About/Niyojit';
import Mandali from './PageComponents/About/KaryaKari';
// import KaryaSanghra from './PageComponents/About/Karyasanghra';

const fadeInVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0 } },
};

const AboutUs = () => {
  return (
    <div className='AboutUs-Container'>
      {/* <motion.div
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      > */}
        <HeroSection />
      {/* </motion.div> */}

      <motion.div
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <AboutInfo />
      </motion.div>

      <motion.div
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Prawas />
      </motion.div>

      <motion.div
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Udistay />
      </motion.div>

      <motion.div
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Niyojit />
      </motion.div>

      <motion.div
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Mandali />
      </motion.div>

      {/* <motion.div
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <KaryaSanghra />
      </motion.div> */}
    </div>
  );
};

export default AboutUs;
