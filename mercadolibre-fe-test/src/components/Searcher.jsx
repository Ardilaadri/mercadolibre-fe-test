import React from 'react';
import "../assets/styles/components/Searcher.scss"

const Searcher = () => (
<section class="search">
      <div class="search-container">
        <div class="logo">
          <a href="#"><img src="https://i.postimg.cc/YS1yRxGT/Logo-ML.png" alt="logo" /></a>
        </div>
        <div class="search-input">
          <input type="text" placeholder="Nunca dejes de buscar" />
          <div class="autocomplete"></div>
          <div class="icon">
            <img src="https://i.postimg.cc/3RYfcD2N/ic-Search.png" alt="icon" />
          </div>
        </div>
      </div>
    </section>
);

export default Searcher;