import React from 'react';
import Item from '../Item';
import { ItemProps, ListProps } from '../../typings/index.ds';
import "./list.css";

const List = ({ list, titleList }: ListProps) => {
  return (
    <div className="container-list">
      <div className="list-header">
        <h2>{titleList}</h2>
      </div>
      {list.map((item: ItemProps, index: number) => (
          <div className="list-items" key={index}>
            <Item id={item.id} name={item.name} />
          </div>
      ))}
    </div>
  )
};

export default List