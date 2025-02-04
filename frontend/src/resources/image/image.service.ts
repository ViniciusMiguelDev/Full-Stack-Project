import { Image } from "./image.resource";

class ImageService {
  baseURL: string = "http://localhost:8080/v1/images";

  async buscar(query: string = "", extension: string = ""): Promise<Image[]> {
    const url = `${this.baseURL}?query=${query}&extension=${extension}`
    const respose = await fetch(url);
    return await respose.json();
  }

  async salvar(dados: FormData) : Promise<string> {
    const response = await fetch(this.baseURL, {
      method: 'POST',
      body: dados
    });

    return response.headers.get('location') ?? ''
  }
}

export const useImageService = () => new ImageService();
