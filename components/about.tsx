"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold tracking-tighter font-mono mb-8">ABOUT ME</h2>
          <div className="space-y-6 text-lg">
            <p>
              I'm a motivated Flutter Developer with a strong background in mobile application development. My journey
              in software development has been driven by a passion for creating intuitive, efficient, and visually
              appealing mobile experiences.
            </p>
            <p>
              With experience across multiple projects and companies, I've developed expertise in Flutter, Dart, and
              various state management solutions like BLoC and GetX. I enjoy the challenge of transforming complex
              requirements into elegant, user-friendly applications.
            </p>
            <p>
              My approach combines technical excellence with a keen eye for design, ensuring that the applications I
              build not only function flawlessly but also provide an exceptional user experience. I'm constantly
              learning and adapting to new technologies to stay at the forefront of mobile development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
