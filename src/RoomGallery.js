import './sass/formir-room.scss'
import React, { useState, useEffect } from 'react'
import Room from './components/Room'
import { parseRooms, parseWalls } from './helpers/parse'

const RoomGallery = () => {
  const [currentState, setCurrentState] = useState({ items: [], rooms: [], activeItem: null })
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [dark, setDark] = useState(false)
  const [zoom, setZoom] = useState(false)

  const preRooms = []
  const preItems = []

  const parseItems = (dataItems) => {
    parseRooms(dataItems, preRooms)
    const activeItem = parseWalls(dataItems, preItems, preRooms)
    setCurrentState({ rooms: preRooms, items: preItems, activeItem })
  }

  const nextItem = () => {
    if (currentState.activeItem.id < currentState.items.length) {
      setCurrent(currentState.items[currentState.activeItem.id + 1])
    } else {
      setCurrent(currentState.items[currentState.items.length])
    }
  }

  const prevItem = () => {
    if (currentState.activeItem.id > 0) {
      setCurrent(currentState.items[currentState.activeItem.id - 1])
    } else {
      setCurrent(currentState.items[0])
    }
  }

  const currentItem = () => {
    return currentState.activeItem
  }

  const setCurrent = (item) => {
    setCurrentState({ items: currentState.items, rooms: currentState.rooms, activeItem: item })
    setPosition({ y: item.position.y, x: item.position.x })
  }

  const darkModeToggle = () => {
    setDark(!dark)
  }

  const zoomToggle = () => {
    setZoom(!zoom)
  }

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch('data.json')
      ).json()
      parseItems(data.items)
    }

    dataFetch()
  }, [])

  return (
    <>
      { currentState.rooms.length > 0 && <div className={`room ${dark ? 'room-dark' : ''} ${zoom ? 'room-zoom' : ''}`}>
          <div className="room-body">
            <div className="room-arena">
              { currentState.rooms.map((room, key) => (
                <Room
                  key={key}
                  number={key}
                  room={room}
                  rooms={currentState.rooms}
                  position={position}/>
              )) }
            </div>
            <div className="room-navigations">
              { currentState.activeItem.id > 0 &&
                <button className="prev" onClick={() => prevItem()}>
                  <span>{currentItem().id}</span>
                </button>
              }
              {
                currentState.items.length > currentState.activeItem.id + 1 &&
                <button className="next" onClick={() => nextItem()}>
                  <span>{currentItem().id + 2.0}</span>
                </button>
              }

            </div>
            <div className="room-paginations">
              { currentState.items.map(item => (
                item.image && <button
                  key={item.id}
                  onClick={() => setCurrent(item) }>
                    {item.id + 1}
                  </button>
              ))}
            </div>
            <button className="room-exit-btn" onClick={() => zoomToggle()}></button>
            <button className="room-zoom-btn" onClick={() => zoomToggle()}></button>
            <button className="room-dark-btn" onClick={() => darkModeToggle()}></button>
          </div>
        </div>
      }
    </>
  )
}

export default RoomGallery
