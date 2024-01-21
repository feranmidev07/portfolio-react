import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
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
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
        styles="text-align: justify"
      >
        Hello, I'm Feranmi Oyebola, a web weaver, weaving the threads of code
        into seamless experiences across web and mobile. As a full-stack
        developer I build seamless experiences across the web,
        weaving code magic on the web.
        As an app developer, I bring innovative apps to life. Whether crafting pixel-perfect interfaces or powering robust backends, I thrive on turning ideas into reality. Let's code together!
        <br />
        <strong>Why Web and App Development?</strong>
        <br />
        My tech journey ignited the moment I realized code could not just build, but improve lives. Every line I write strives to smooth users' online paths, turning clicks into smiles. Let's craft tech that elevates, not just exists.
        <br />
        <strong>My Tech Stack</strong>
        <br />
        I thrive in the dynamic worlds of web and mobile development. On the web, I'm a master of the MEVN stack (MongoDB, Express, Vue.js, Node.js) and seasoned in ReactJS, NuxtJS, and NextJS. I also bring captivating mobile experiences to life with Flutter and Dart, building efficient, user-friendly, and visually stunning apps. Beyond coding, I'm a problem-solver at heart, crafting solutions that delight users and stay ahead of the curve. Let's collaborate to build the future, one pixel or line of code at a time!
        <br />
        <strong>Design Philosophy</strong>
        <br />
        I believe that great digital experiences, whether on the web or in an app, should be seamless, captivating, and engaging. This applies to every pixel and interaction. That's why I draw upon my expertise in UI/UX design, frameworks like Tailwind CSS and Bootstrap, and even Flutter for mobile, to craft experiences that not only meet your technical needs but also leave a lasting positive impact on users.
        <br />
        <strong>Let's Collaborate</strong>
        <br />
        Whether you're dreaming of a captivating mobile app, a seamless web application, or a dazzling online presence, I'm your partner in digital creation. Together, let's transform your vision into reality, crafting exceptional experiences that engage, inspire, and make a lasting impact.
        <br />
        Thank you for visiting my portfolio. Feel free to explore my projects,
        and don't hesitate to reach out if you have any questions or if you'd
        like to start a conversation about your next project. I'm looking
        forward to connecting with you.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
