"use client";

import {
  ImageCard,
  Template,
  Button,
  InputText,
} from "@/components";
import { Image } from "@/resources/image/image.resource";
import { useImageService } from "@/resources/image/image.service";
import { useState } from "react";
import Link from "next/link";

export default function GaleriaPage() {
  const useService = useImageService();
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [extension, setExtension] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  async function searchImages() {
    setLoading(true);
    const result = await useService.buscar(query, extension);
    setImages(result);
    setLoading(false);
  }

  function renderImageCard(image: Image) {
    return (
      <ImageCard
        key={image.url}
        nome={image.name}
        src={image.url}
        tamanho={image.size}
        extension={image.extension}
        dataUpload={image.uploadDate}
      ></ImageCard>
    );
  }

  function renderImageCards() {
    return images.map(renderImageCard);
  }

  return (
    <Template loading={loading}>
      <section className="flex flex-col items-center justify-center my-5">
        <div className="flex space-x-4">
          <InputText
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Digite nome ou tag"
          />
          <select
            className="border px-4 py-2 rounded-lg text-gray-900"
            onChange={(e) => setExtension(e.target.value)}
          >
            <option>All formats</option>
            <option>PNG</option>
            <option>JPEG</option>
            <option>GIF</option>
          </select>
          <Button
            type="button"
            color="blue"
            onClick={searchImages}
            label="Search"
          />
          <Link href="/formulario">
            <Button type="button" color="red" label="Add New" />
          </Link>
        </div>
      </section>
      <section className="grid grid-cols-4 gap-8">{renderImageCards()}</section>
    </Template>
  );
}
