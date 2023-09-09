import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]" styles="text-align: justify">
        Hello, I'm Michael Guzik, a passionate full-stack developer with a strong foundation in MongoDB, Express, Vue.js, Nuxt.js, Node.js, Tailwind CSS, React.js, Next.js, Bootstrap, and more.
        <br />
        <strong>Why Web Development?</strong>
        <br />
        My journey in the world of technology began when I discovered my passion for creating digital solutions that can improve people's lives. With every line of code I write, I aim to make the online experience more seamless and enjoyable for users.
        <br />
        <strong>My Tech Stack</strong>
        <br />
        I thrive in the dynamic world of MEVN (MongoDB, Express, Vue.js, Node.js) and also have experience with ReactJS, NuxtJS and NextJS. I'm not just a developer who codes; I'm a problem solver who enjoys crafting efficient, user-friendly, and visually appealing websites. My dedication to staying up-to-date with the latest technologies ensures that my projects are always at the forefront of web development trends.
        <br />
        <strong>Design Philosophy</strong>
        <br />
        I believe that a great website should not only function flawlessly but also captivate and engage visitors. This is where my expertise in UI/UX design and frameworks like Tailwind CSS and Bootstrap comes into play. I strive to create websites that not only meet your technical requirements but also leave a lasting impression.
        <br />
        <strong>Let's Collaborate</strong>
        <br />
        Whether you're looking to build a stunning web application, enhance your online presence, or simply discuss the exciting possibilities of web development, I'm here to collaborate and bring your ideas to life. Let's work together to create something exceptional.
        <br />
        Thank you for visiting my portfolio. Feel free to explore my projects, and don't hesitate to reach out if you have any questions or if you'd like to start a conversation about your next project. I'm looking forward to connecting with you.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
