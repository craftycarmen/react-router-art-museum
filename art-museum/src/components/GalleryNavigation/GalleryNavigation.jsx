import React from 'react'
import { NavLink } from 'react-router-dom'

export default function GalleryNavigation({ galleries }) {
    return (
        <nav>
            <h1>Galleries</h1>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                {galleries.map(gallery => {
                    return (
                        <li key={gallery.id}>
                            <NavLink to={`${gallery.id}`}>{gallery.name}</NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav >
    )
}
