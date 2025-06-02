"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { experienceData } from "@/lib/data"
import { Calendar, Building2, ChevronRight } from "lucide-react"

export default function ExperienceScreen() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  }

  return (
    <div className="h-full w-full bg-gradient-to-b from-gray-900 to-black text-white overflow-y-auto">
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col pt-20 pb-20 px-6"
      >
        <motion.h2 variants={item} className="text-2xl font-bold font-mono tracking-tight mb-6 text-white">
          EXPERIENCE
        </motion.h2>

        <motion.div variants={item} className="space-y-0">
          {experienceData.map((experience, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              {/* Timeline connector */}
              {index < experienceData.length - 1 && (
                <div
                  className="absolute left-[22px] top-[72px] bottom-0 w-1 bg-gradient-to-b from-gray-700 to-gray-800/30 rounded-full"
                  style={{ height: "calc(100% - 72px)" }}
                ></div>
              )}

              {/* Experience card */}
              <div className="relative z-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700 shadow-lg mb-8">
                <div className="p-4 border-b border-gray-700 bg-gray-800/50">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-11 w-11 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center mr-3 z-20">
                      <span className="text-lg font-bold text-gray-300">{experience.role.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-300 hover:text-gray-300">{experience.role}</h3>
                      <div className="flex items-center text-gray-400 mt-1">
                        <Building2 className="h-4 w-4 mr-1 text-gray-300" />
                        <span className="text-sm hover:text-gray-400">{experience.company}</span>
                      </div>
                      <div className="flex items-center text-gray-500 mt-1">
                        <Calendar className="h-4 w-4 mr-1 text-gray-300" />
                        <span className="text-sm hover:text-gray-500">{experience.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <ul className="space-y-2">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start group">
                        <ChevronRight className="h-5 w-5 text-white mr-2 mt-0.5 group-hover:translate-x-1 transition-transform" />
                        <span className="text-gray-300 text-sm hover:text-gray-300">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
