import React from 'react'
import "./Favourites.css"

const FavouritesItem = ({ id, category, title, thumbnail }) => {
    return (
        <article className='favourites-item'>

            <div className="info">
                <img src={thumbnail} alt={title} />
                <div >
                    <h3>{title}</h3>
                    <p>Category: {category}</p>
                </div>
            </div>

            <button className="button icon-btn">
                <i className="fa-solid fa-trash"></i>
            </button>
        </article>
    )
}

export default FavouritesItem
