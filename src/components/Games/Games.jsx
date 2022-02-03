import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Games.module.css';

const Games = (props) => {
    
    return (
        <section className={s.gameContainer}>
            {props.renderData.map((game) => (
                <NavLink key={+game.gameId} to={`/game/${game.path}`}>
                    <div className={s.gameBlock}>
                        <div>
                            <h2>{game.name}</h2>
                            <p>{game.description}</p>
                        </div>
                        <img src={game.img} alt="#" />
                    </div>
                </NavLink>
            ))}
        </section>
    );
};

export default Games;
