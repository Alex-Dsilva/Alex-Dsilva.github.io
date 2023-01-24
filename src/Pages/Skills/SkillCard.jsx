import { Box } from '@chakra-ui/react'
import styles from "./SkillCard.module.css"
import { useState } from "react"

export function SkillCard({ skill, icon }) {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount((prev) => prev + 1)
  }
  return (
    // <Pulse spy={count}>
    <Box boxShadow='sm' className={styles.card}>
      {icon}

      <p>{skill}</p>
    </Box>
    // </Pulse>
  )
}