import React from 'react'
import { useState } from 'react'

function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = useState(null)

  const onSelectItem = index => {
    setActiveItem(index)
  }

  return (
    <div className='categories'>
      <ul>
        <li
          className={activeItem === null ? 'active' : ''}
          onClick={() => onSelectItem(null)}
        >
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              key={`${index}_${name}`}
              className={activeItem === index ? 'active' : ''}
              onClick={() => onSelectItem(index)}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Categories
