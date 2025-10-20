'use client'

import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { useSectionInView } from '@/lib/hooks'

const About = () => {
    const { ref } = useSectionInView("About");


    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
  I have recently graduated with a diploma in{" "}
  <span className="font-medium">Information Technology</span> and decided to
  pursue my passion for programming. I started learning{" "}
  <span className="font-medium">web development</span>, and I
  enjoy the problem-solving aspect of programming the most. Finding solutions to
  challenging problems gives me a sense of achievement. My core skills include{" "}
  <span className="font-medium">
    React, Javascript ,  Redux, and MongoDB, redux
  </span>
  , and I am also familiar with{" "}
  <span className="font-medium">TypeScript</span>. I am always eager to learn
  new technologies and improve my skills. I am currently seeking an opportunity
  as a <span className="font-medium">Web Developer</span> to apply my knowledge
  and grow in the industry.
</p>

<p>
  <span className="italic">When I'm not coding</span>, I enjoy watching
  podcasts, vlogs, and anime. I also like{" "}
  <span className="font-medium">learning new things</span>, and I am currently
  focusing on{" "}
  <span className="font-medium">data structures and algorithms</span> to
  strengthen my problem-solving abilities.
</p>

        </motion.section>
    )
}

export default About