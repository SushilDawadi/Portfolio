"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { experienceData } from "@/lib/data"

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="experience" className="w-full py-20 md:py-32 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold tracking-tighter font-mono mb-12">EXPERIENCE</h2>
          <div className="relative border-l border-gray-300 dark:border-gray-700 pl-8 ml-4">
            {experienceData.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-12 relative"
              >
                <div className="absolute -left-12 mt-1.5 h-6 w-6 rounded-full border-4 border-white dark:border-black bg-black dark:bg-white"></div>
                <div className="bg-white dark:bg-black p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
                  <h3 className="text-xl font-bold font-mono">{experience.role}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">{experience.company}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">{experience.duration}</p>
                  <ul className="list-disc pl-5 space-y-2">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="text-gray-700 dark:text-gray-300">
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
