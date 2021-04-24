import { useEffect, useState } from "react";
import api from "../../services/api";

import { Container, Content, Title, BoxGallery, Imagem } from "./styles";

interface Image {
    id: number,
    image: string,
    is_available: boolean
}

export function Gallery() {
    const [images, setImages] = useState<Image[]>([]);

    useEffect(() => {
        try {
			api.get('uploads/')
			.then(response => {
                setImages(response.data);
			})
		} catch(error) {
			console.log(error);
		}
    }, []);

    return (
        <Container>
            <Content>
                <Title>Galeria</Title>
                <BoxGallery>
                    {images.map(image => (
                        image.is_available &&
                        <Imagem key={image.id}>
                            <img src={`http://127.0.0.1:8000${image.image}`} alt={image.image}/>
                        </Imagem>
                    ))}
                </BoxGallery>
            </Content>
        </Container>
    )
}