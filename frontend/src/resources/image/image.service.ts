import { Image } from "./image.resource";

class ImageService {
    baseURL: string = 'http://localhost:8080/v1/images';

    async buscar() : Promise<Image[]> {
        const respose = await fetch(this.baseURL);
        return await respose.json();
    }
}

export const useImageService = () => new ImageService();
