import { type } from 'os';
import * as React from 'react';

import styles from '../styles/Sequencer.module.css'

export interface ISequencerProps {
  turn: number;
}

class Tile {
  char: string;
  cl: string;

  constructor(char: string, cl: string) {
    this.char = char;
    this.cl = cl;
  }
}

export default function Sequencer(props: ISequencerProps) {

  let arr: Tile[][] = Array.from({ length: 16 }, () => Array.from({ length: 16 }, () => new Tile('.', 'none')))

  let radar = (index: number, jndex: number, arr: Tile[][]): void => {

    for (let i = index - 1; i <= index + 1; i++) {
      if (i < 0) { i = 0; } if (i > 15) { i = 15 }
      for (let j = jndex - 1; j <= jndex + 1; j++) {
        if (j < 0) { j = 0; } if (j > 15) { j = 15 }

        arr[i][j].cl === 'one' ? arr[i][j].cl = 'two' : arr[i][j].cl === 'two' ? arr[i][j].cl = 'three' : arr[i][j].cl === 'three' ? arr[i][j].cl = 'four' : arr[i][j].cl = 'one'

      }
    }
  }

  let getNewArr = (arr: Tile[][]): any => {
    arr.map((i, index) => i.forEach((j, jndex) => { if (j.cl !== "none") { radar(index, jndex, arr) } else { j } }))
  }

  arr[3][8].cl = "one";

  return (
    <>
      <div id={styles.arr}>
        {arr.map((i, index) => <div> {i.map((j) => <span className={styles[j.cl]}>{j.char}</span>)} </div>)}
      </div>
      <div>
        {props.turn}
      </div>
    </>
  );
}
