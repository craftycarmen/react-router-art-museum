import React from 'react'
import { Link } from 'react-router-dom';

export default function ArtImageTile({ art }) {
    console.log(art.images[0]);
    return (
        <>
            <div>ArtImageTile</div>
            <Link to={`${art.id}`}>
                <img src={art.images[0].baseimageurl} />
            </Link >
        </>
    )
}
