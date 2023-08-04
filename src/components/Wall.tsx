import React from 'react'
import { Item, ItemI } from './Item'
import { RoomType } from './Room'

export enum Direction {
  n = 'n',
  e = 'e',
  s = 's',
  w = 'w'
}

export interface WallI {
  direction: Direction;
  items: Array<ItemI>;
  room: RoomType;
  visible: boolean;
}

export type WallType = {
  direction: Direction,
  items: Array<ItemI>,
  room: RoomType;
  visible: boolean;
}

export const Wall = ({ direction, items }: WallI) => {
  return <div className={`wall wall-${direction}`}>
    { items.map(item => (
      <Item key={item.index} index={item.index} description={item.description} image={item.image}></Item>
    ))}
  </div>
}