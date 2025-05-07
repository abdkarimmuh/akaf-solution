"use client"

import { motion } from "framer-motion"

interface SkillMeterProps {
  value: number
  size?: "sm" | "md" | "lg"
  color?: string
  showValue?: boolean
  className?: string
}

export function SkillMeter({
  value,
  size = "md",
  color = "hsl(var(--primary))",
  showValue = true,
  className = "",
}: SkillMeterProps) {
  const sizeMap = {
    sm: 60,
    md: 80,
    lg: 120,
  }

  const strokeWidth = {
    sm: 4,
    md: 6,
    lg: 8,
  }

  const fontSize = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-lg",
  }

  const actualSize = sizeMap[size]
  const radius = (actualSize - strokeWidth[size]) / 2
  const circumference = radius * 2 * Math.PI
  const strokeDashoffset = circumference - (value / 100) * circumference

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        width={actualSize}
        height={actualSize}
        viewBox={`0 0 ${actualSize} ${actualSize}`}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={actualSize / 2}
          cy={actualSize / 2}
          r={radius}
          fill="none"
          stroke="rgba(255, 0, 0, 0.1)"
          strokeWidth={strokeWidth[size]}
        />

        {/* Progress circle */}
        <motion.circle
          cx={actualSize / 2}
          cy={actualSize / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth[size]}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          strokeLinecap="round"
        />
      </svg>

      {showValue && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className={`font-medium ${fontSize[size]}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            {value}%
          </motion.span>
        </div>
      )}
    </div>
  )
}
