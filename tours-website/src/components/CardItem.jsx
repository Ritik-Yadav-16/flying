import React from 'react';
import { NavLink } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <NavLink className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </NavLink>
      </li>
    </>
  );
}

export default CardItem;
