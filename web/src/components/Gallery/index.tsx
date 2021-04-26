import { useEffect, useState } from "react";
import api from "../../services/api";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

import { Container, Content } from "./styles";

interface Image {
    id: number,
    image: string,
    is_available: boolean
}

interface GalleryProps {
    original: string,
    thumbnail: string,
}

export function Gallery() {
    const [images, setImages] = useState<Image[]>([]);
    const [gallery, setGallery] = useState<GalleryProps[]>([]);

    useEffect(() => {
        try {
			api.get('uploads/')
			.then(response => {
                const availableImages = response.data.filter(
                    (upload: Image) => upload.is_available === true
                );
                setImages(availableImages);
			})
		} catch(error) {
			console.log(error);
		}
    }, []);

    useEffect(() => {
        setGallery(
            images.map(image => ({
                original:   `${process.env.REACT_APP_API_URL || "http://127.0.0.1:8000"}${image.image}`,
                thumbnail: `${process.env.REACT_APP_API_URL || "http://127.0.0.1:8000"}${image.image}`
            }))
        );
    }, [images]);

    return (
        <Container>
            <Content>
                <ImageGallery
                    items={gallery}
                    additionalClass="Gallery"
                    autoPlay={true}
                />
            </Content>
        </Container>
    )
}