import React from 'react';
import './search-filter.styles.css';

export const SearchFilter = ({ filterLogic }) => (
  <div>
    <h3>These are some of the most favorite. Pick one, or search above.</h3>
    <ul className="filters">
      <li className="filter" onClick={filterLogic}>
        Chicken
      </li>
      <li className="filter" onClick={filterLogic}>
        Sushi
      </li>
      <li className="filter" onClick={filterLogic}>
        Bread
      </li>
      <li className="filter" onClick={filterLogic}>
        Risotto
      </li>
      <li className="filter" onClick={filterLogic}>
        Pasta
      </li>
      <li className="filter" onClick={filterLogic}>
        Soup
      </li>
      <li className="filter" onClick={filterLogic}>
        Dessert
      </li>
      <li className="filter" onClick={filterLogic}>
        Pizza
      </li>
      <li className="filter" onClick={filterLogic}>
        Grill
      </li>
    </ul>
  </div>
);
