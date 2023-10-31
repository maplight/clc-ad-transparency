import { statSync } from "fs";
import type { Attribute, Strapi } from "@strapi/strapi";

type User = Attribute.GetValues<"admin::user">;

type UploadFileData = {
  ref: string;
  refId: string;
  field: string;
};

type UploadFileFile = {
  name: string;
  path: string;
  type: string;
};

type UploadFile = {
  data: UploadFileData;
  file: UploadFileFile;
};

const uploadFile = async (
  strapi: Strapi,
  { data, file }: UploadFile,
  user: User
) => {
  const { refId, ref, field } = data;
  const { name, path, type } = file;

  const fileStat = statSync(path);

  const [uploadedFile] = await strapi.plugins.upload.services.upload.upload(
    {
      data: {
        refId,
        ref,
        field,
      },
      files: {
        path,
        name,
        type,
        size: fileStat.size,
      },
    },
    { user }
  );

  return uploadedFile;
};

export default uploadFile;
