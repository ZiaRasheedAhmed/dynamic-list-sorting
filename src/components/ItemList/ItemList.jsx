import React from "react";
import "./ItemList.css";

const ItemList = React.memo(({data})=> {

  return (
    <div className="mainDiv">
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h2>{item.id}</h2>
            <div className="content">
              <h1>{item.title}</h1>
              <p>{item.content}</p>
              <p>{item.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default ItemList;
