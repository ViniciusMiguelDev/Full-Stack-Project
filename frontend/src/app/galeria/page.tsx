"use client";

import { ImageCard, Template } from "@/components";
import { Image } from "@/resources/image/image.resource";
import { useImageService } from "@/resources/image/image.service";
import { useState } from "react";

export default function GaleriaPage() {
  const useService = useImageService();
  const [images, setImages] = useState<Image[]>([]);

  async function searchImages() {
    const result = await useService.buscar();
    setImages(result);
  }

  function renderImageCard(image: Image) {
    return (
      <ImageCard
        nome={image.name}
        src={image.url}
        tamanho={image.size}
        dataUpload={image.uploadDate}
      ></ImageCard>
    );
  }

  function renderImageCards() {
    return images.map(renderImageCard);
  }

  return (
    <Template>
      <button onClick={searchImages} className="bg-gray-500">
        Clique para mudar
      </button>
      <section className="grid grid-cols-4 gap-8">{renderImageCards()}</section>
    </Template>
  );
}
