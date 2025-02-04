"use client";

import {
  Template,
  Button,
  InputText,
  RenderIf,
  FieldError,
} from "@/components";
import { useImageService } from "@/resources/image/image.service";
import Link from "next/link";
import { useFormik } from "formik";
import { FormProps, formScheme, formValidationScheme } from "./formScheme";
import { useState } from "react";

export default function FormularioPage() {
  const [imagePreview, setImagePreview] = useState<string>();
  const service = useImageService();
  const [loading, setLoading] = useState<boolean>(false);

  const formik = useFormik<FormProps>({
    initialValues: formScheme,
    onSubmit: handleSubmit,
    validationSchema: formValidationScheme,
  });

  async function handleSubmit(dados: FormProps) {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", dados.file);
    formData.append("tags", dados.tags);
    formData.append("name", dados.name);

    await service.salvar(formData);

    formik.resetForm();
    setImagePreview("");

    setLoading(false);
  }

  function onFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      const file = event.target.files[0];
      formik.setFieldValue("file", file);
      const image = URL.createObjectURL(file);
      setImagePreview(image);
    }
  }

  return (
    <Template loading={loading}>
      <section className="flex flex-col items-center justify-center my-5">
        <h5 className="mt-3 mb-10 text-3xl font-extrabold tracking-tight text-gray-900">
          Nova Imagem
        </h5>
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-1">
            <label className="block text-sm font-medium leading-6 text-gray-700">
              Name: *
            </label>
            <InputText
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              placeholder="type the image's name"
            />
            <FieldError error={formik.errors.name}/>
          </div>

          <div className="mt-5 grid grid-cols-1">
            <label className="block text-sm font-medium leading-6 text-gray-700">
              Tags: *
            </label>
            <InputText
              id="tags"
              value={formik.values.tags}
              onChange={formik.handleChange}
              placeholder="type the tags"
            />
            <FieldError error={formik.errors.tags}/>
          </div>

          <div className="mt-5 grid grid-cols-1">
            <label className="block text-sm font-medium leading-6 text-gray-700">
              Image: *
            </label>
            <FieldError error={formik.errors.file}/>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <RenderIf condition={!imagePreview}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#8d8b8b"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <rect width="24" height="24" fill="white"></rect>
                      <path
                        d="M21 16V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V18M21 16V4C21 3.44772 20.5523 3 20 3H4C3.44772 3 3 3.44772 3 4V18M21 16L15.4829 12.3219C15.1843 12.1228 14.8019 12.099 14.4809 12.2595L3 18"
                        stroke="#8d8b8b"
                        strokeLinejoin="round"
                      ></path>
                      <circle
                        cx="8"
                        cy="9"
                        r="2"
                        stroke="#8d8b8b"
                        strokeLinejoin="round"
                      ></circle>
                    </g>
                  </svg>
                </RenderIf>

                <div className="mt-4 flex text-sm leading-6 text-gray-700">
                  <label className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600">
                    <RenderIf condition={!imagePreview}>
                      <span>Click to upload</span>
                    </RenderIf>
                    <RenderIf condition={!!imagePreview}>
                      <img
                        src={imagePreview}
                        className="rounded-md max-w-full h-auto"
                      />
                    </RenderIf>
                    <input
                      onChange={onFileUpload}
                      type="file"
                      className="sr-only"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center justify-end gap-x-4">
            <Button
              type="submit"
              style="bg-blue-500 hover:bg-blue-300"
              label="Save"
            />
            <Link href="/galeria">
              <Button
                type="button"
                style="bg-red-500 hover:bg-red-300"
                label="Cancel"
              />
            </Link>
          </div>
        </form>
      </section>
    </Template>
  );
}
