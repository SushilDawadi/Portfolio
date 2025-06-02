"use client"

import type React from "react"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useEffect, useState } from "react"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Battery, Wifi, SignalHigh } from "lucide-react"

interface IPhoneFrameProps {
  children: React.ReactNode
}

export default function IPhoneFrame({ children }: IPhoneFrameProps) {
  const [time, setTime] = useState(new Date())
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Mouse tracking for 3D effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 50, stiffness: 400 }
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [5, -5]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-5, 5]), springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  const resetMouse = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formattedTime = time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  const formattedDate = time.toLocaleDateString([], { weekday: "short", month: "short", day: "numeric" })

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative mx-auto my-8"
      onMouseMove={!isMobile ? handleMouseMove : undefined}
      onMouseLeave={!isMobile ? resetMouse : undefined}
    >
      {/* iPhone Frame with 3D effect */}
      <motion.div
        style={!isMobile ? { rotateX, rotateY, perspective: 1000 } : {}}
        className={`relative mx-auto ${
          isMobile ? "h-[85vh] w-full max-w-[350px]" : "h-[700px] w-[350px]"
        } rounded-[50px] bg-gradient-to-b from-gray-800 to-gray-950 shadow-xl overflow-hidden`}
      >
        {/* Frame Border with Reflections */}
        <div className="absolute inset-0 rounded-[50px] border-[14px] border-gray-800 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 opacity-80"></div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-tr from-transparent to-gray-700/20 rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-bl from-transparent to-gray-700/20 rounded-full"></div>
        </div>

        {/* Side Buttons */}
        <div className="absolute -left-[2px] top-[120px] h-[30px] w-[3px] rounded-l-lg bg-gray-700"></div>
        <div className="absolute -left-[2px] top-[170px] h-[60px] w-[3px] rounded-l-lg bg-gray-700"></div>
        <div className="absolute -right-[2px] top-[150px] h-[40px] w-[3px] rounded-r-lg bg-gray-700"></div>

        {/* Screen Content with proper border radius */}
        <div className="absolute inset-[14px] rounded-[36px] overflow-hidden">
          {/* Background gradient that matches the frame's border radius */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black rounded-[36px]"></div>

          {/* Camera Island - black with smaller size */}
          <div className="absolute left-1/2 top-[10px] z-50 h-[25px] w-[120px] -translate-x-1/2 rounded-[20px] bg-black flex items-center justify-center overflow-hidden">
            <div className="relative flex items-center space-x-2">
              <div className="h-[10px] w-[10px] rounded-full bg-gray-900 flex items-center justify-center">
                <div className="h-[5px] w-[5px] rounded-full bg-gray-950"></div>
              </div>
              <div className="h-[7px] w-[7px] rounded-full bg-gray-900"></div>
              <div className="h-[3px] w-[3px] rounded-full bg-gray-950 ml-1"></div>
            </div>
          </div>

          {/* Status Bar - Make it sticky */}
          <div className="absolute top-0 z-30 w-full pt-2 pb-4 rounded-t-[36px]">
            <div className="flex justify-between px-8 pt-12 text-white">
              <div className="flex flex-col items-center">
                <span className="text-xs font-medium">{formattedTime}</span>
                <span className="text-[10px] text-gray-400">{formattedDate}</span>
              </div>
              <div className="flex items-center space-x-2">
                <SignalHigh className="h-4 w-4" />
                <Wifi className="h-4 w-4" />
                <Battery className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Scrollable content area - starts below the notch */}
          <div className="absolute inset-0 pt-[45px] overflow-y-auto scrollbar-hide rounded-[36px]">{children}</div>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-1 left-1/2 h-1 w-32 -translate-x-1/2 rounded-full bg-gray-300/80"></div>
      </motion.div>

      {/* Reflections and Shadows */}
      <div className="pointer-events-none absolute -left-10 -top-10 h-[800px] w-[400px] rotate-[20deg] bg-gradient-to-br from-blue-400/20 to-transparent opacity-30"></div>
      <div className="pointer-events-none absolute -right-10 -bottom-10 h-[800px] w-[400px] rotate-[20deg] bg-gradient-to-br from-purple-400/20 to-transparent opacity-30"></div>

      {/* Phone Shadow */}
      <div className="absolute -bottom-10 left-1/2 h-[20px] w-[300px] -translate-x-1/2 rounded-full bg-black/30"></div>
    </motion.div>
  )
}
