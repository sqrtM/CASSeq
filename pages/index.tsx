import { useState } from 'react'
import Sequencer from '../src/Sequencer'

import styles from '../styles/Index.module.css'


export default function Index() {

  const [turn, setTurn] = useState(0);

  return (
    <>
      <Sequencer turn={turn} />
      <button onClick={() => setTurn(turn + 1)}>wow</button>
    </>
  )
}