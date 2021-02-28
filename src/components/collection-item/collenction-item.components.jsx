import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({ id, imageUrl, price, name }) => (
  <div className='collection-item'>
   <div
      className='image'
      style={{backgroundImage: `url(${imageUrl})`}}
   />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>R${price},00</span>
    </div>
 </div>
)

export default CollectionItem;