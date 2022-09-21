import React from 'react'
import { motion } from 'framer-motion'
import ToolBarButton from './ToolBarButton'
import { useColorMode } from '~/hooks/use-color-mode'

function ColorMode() {
  const { isDark, toggleColorMode } = useColorMode()
  return (
    <ToolBarButton title='Switch Color Mode' onClick={toggleColorMode}>
      <svg viewBox='0 0 48 48' className='inline text-4xl' height='1em' width='1em'>
        {/* Glow */}
        <motion.circle
          fill='#FFF59D'
          cx='24'
          cy='22'
          animate={{ r: isDark ? 10 : 20 }}
          transition={{ type: 'spring', damping: 8, duration: 0.3 }}
        />
        {/* Light Bulb */}
        <motion.path
          d='M37,22c0-7.7-6.6-13.8-14.5-12.9c-6,0.7-10.8,5.5-11.4,11.5c-0.5,4.6,1.4,8.7,4.6,11.3 c1.4,1.2,2.3,2.9,2.3,4.8V37h12v-0.1c0-1.8,0.8-3.6,2.2-4.8C35.1,29.7,37,26.1,37,22z'
          animate={{ fill: isDark ? '#CFD8DC' : '#FBC02D' }}
          transition={{ type: 'spring', damping: 8, duration: 0.3 }}
        />
        {/* Wire */}
        <motion.path
          d='M30.6,20.2l-3-2c-0.3-0.2-0.8-0.2-1.1,0L24,19.8l-2.4-1.6c-0.3-0.2-0.8-0.2-1.1,0l-3,2 c-0.2,0.2-0.4,0.4-0.4,0.7s0,0.6,0.2,0.8l3.8,4.7V37h2V26c0-0.2-0.1-0.4-0.2-0.6l-3.3-4.1l1.5-1l2.4,1.6c0.3,0.2,0.8,0.2,1.1,0 l2.4-1.6l1.5,1l-3.3,4.1C25.1,25.6,25,25.8,25,26v11h2V26.4l3.8-4.7c0.2-0.2,0.3-0.5,0.2-0.8S30.8,20.3,30.6,20.2z'
          animate={{ fill: isDark ? '#78909C' : '#FFF59D' }}
          transition={{ type: 'spring', damping: 8, duration: 0.3 }}
        />
        <motion.circle fill='#5C6BC0' cx='24' cy='44' r='3' />
        <motion.path fill='#9FA8DA' d='M26,45h-4c-2.2,0-4-1.8-4-4v-5h12v5C30,43.2,28.2,45,26,45z' />
        <motion.g fill='#5C6BC0'>
          <path d='M30,41l-11.6,1.6c0.3,0.7,0.9,1.4,1.6,1.8l9.4-1.3C29.8,42.5,30,41.8,30,41z' />
          <polygon points='18,38.7 18,40.7 30,39 30,37' />
        </motion.g>
      </svg>
    </ToolBarButton>
  )
}

export default ColorMode