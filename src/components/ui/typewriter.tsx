"use client"

import { useEffect, useState, useRef } from "react"
import { motion, Variants } from "framer-motion"

interface TypewriterProps {
  text: string | string[]
  speed?: number
  initialDelay?: number
  waitTime?: number
  deleteSpeed?: number
  loop?: boolean
  className?: string
  showCursor?: boolean
  hideCursorOnType?: boolean
  cursorChar?: string | React.ReactNode
  cursorAnimationVariants?: {
    initial: Variants["initial"]
    animate: Variants["animate"]
  }
  cursorClassName?: string
}

const Typewriter = ({
  text,
  speed = 50,
  initialDelay = 0,
  waitTime = 2000,
  deleteSpeed = 30,
  loop = true,
  className,
  showCursor = true,
  // hideCursorOnType is not used in the current implementation
  // but kept in the interface for backward compatibility
  cursorChar = "|",
  cursorClassName = "ml-1",
  cursorAnimationVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.01,
        repeat: Infinity,
        repeatDelay: 0.4,
        repeatType: "reverse",
      },
    },
  },
}: TypewriterProps) => {
  const [displayText, setDisplayText] = useState("")
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    let currentIndex = 0
    let direction = 'typing' // 'typing' or 'deleting'
    let currentText = ""
    let charIndex = 0
    
    // Move textArray inside the effect to avoid dependency issues
    const textArray = Array.isArray(text) ? text : [text]

    const type = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      const word = textArray[currentIndex]

      if (direction === 'typing') {
        // Still typing
        if (charIndex < word.length) {
          currentText = word.substring(0, charIndex + 1)
          charIndex++
          setDisplayText(currentText)
          timeoutRef.current = setTimeout(type, speed)
        } 
        // Finished typing
        else {
          timeoutRef.current = setTimeout(() => {
            direction = 'deleting'
            type()
          }, waitTime)
        }
      } else {
        // Still deleting
        if (charIndex > 0) {
          charIndex--
          currentText = word.substring(0, charIndex)
          setDisplayText(currentText)
          timeoutRef.current = setTimeout(type, deleteSpeed)
        } 
        // Finished deleting
        else {
          direction = 'typing'
          currentIndex = (currentIndex + 1) % textArray.length
          
          // If we've gone through all words and loop is false, stop
          if (currentIndex === 0 && !loop) {
            return
          }
          
          timeoutRef.current = setTimeout(type, speed)
        }
      }
    }

    // Start the animation after initial delay
    timeoutRef.current = setTimeout(type, initialDelay)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [text, speed, deleteSpeed, waitTime, loop, initialDelay])

  return (
    <span className={`inline whitespace-pre-wrap tracking-tight ${className}`}>
      <span>{displayText}</span>
      {showCursor && (
        <motion.span
          variants={cursorAnimationVariants}
          className={cursorClassName}
          initial="initial"
          animate="animate"
        >
          {cursorChar}
        </motion.span>
      )}
    </span>
  )
}

export { Typewriter } 