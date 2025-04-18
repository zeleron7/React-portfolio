import { useRef, useEffect, useState } from 'react'
import { useAnimationFrame } from 'framer-motion'
import styles from './Cube.module.css';

export function UseAnimationFrame() {
  const ref = useRef(null)
  const [ready, setReady] = useState(false)

  // Set 'ready' after component mounts to ensure ref exists
  useEffect(() => {
    setReady(true)
  }, [])

  useAnimationFrame((t) => {
    if (!ref.current || !ready) return

    const rotate = Math.sin(t / 10000) * 200
    const y = (1 + Math.sin(t / 1000)) * -50
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`
  })

  return (
    <div className={styles.container}>
      <div className={styles.cube} ref={ref}>
        <div className={styles.sidefront} />
        <div className={styles.sideback} />
        <div className={styles.sideleft} />
        <div className={styles.sideright} />
        <div className={styles.sidetop} />
        <div className={styles.sidebottom} />
      </div>
    </div>
  )
}



