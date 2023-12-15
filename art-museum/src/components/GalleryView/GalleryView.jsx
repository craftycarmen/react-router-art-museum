import React from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'


export default function GalleryView({ galleries }) {
    const navigate = useNavigate();
    const { galleryId } = useParams();

    const artGallery = galleries.find((gallery) => gallery.id === +galleryId)

    if (!artGallery) return <Navigate to="/"></Navigate>

    return (
        <>
            <h1>Hello from GalleryView</h1>
            <h2>{artGallery.name}</h2>
        </>
    )
}
