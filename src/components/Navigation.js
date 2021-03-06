import React from 'react'

export default function Navigation() {
    return (
        <div className="navigation">
        <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>

        <label htmlFor="navi-toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
        </label>

        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
            <ul className="navigation__list">
                <li className="navigation__item"><a href="#about" className="navigation__link"><span>01</span>About Diserva</a></li>
                <li className="navigation__item"><a href="#benefit" className="navigation__link"><span>02</span>Your benfits</a></li>
                <li className="navigation__item"><a href="#popular" className="navigation__link"><span>03</span>Popular Services</a></li>
                <li className="navigation__item"><a href="#story" className="navigation__link"><span>04</span>Stories</a></li>
                <li className="navigation__item"><a href="#book" className="navigation__link"><span>05</span>Book now</a></li>
                </ul>
        </nav>
    </div>
    )
}
