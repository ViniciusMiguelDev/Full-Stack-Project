import * as Yup from "yup";

export interface FormProps {
  name: string;
  tags: string;
  file: string | Blob;
}
export const formScheme: FormProps = { name: "", tags: "", file: "" };

export const formValidationScheme = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required("Name is required")
    .max(50, "Name has the limit of 50 characters!"),

  tags: Yup.string()
    .trim()
    .required("tags are required")
    .max(50, "tags has the limit of 50 characters!"),

  file: Yup.mixed<Blob>()
    .required("Select an image to upload!")
    .test("size", "File size cannot be higher than 4 MB", (file) => {
      return file.size < 4000000;
    })
});
