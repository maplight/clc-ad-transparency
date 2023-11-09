import { statSync } from "fs";
import type { Attribute, Strapi } from "@strapi/strapi";

type User = Attribute.GetValues<"admin::user">;
type FileUpload = Attribute.GetValues<"plugin::upload.file">;

type UploadFile = Pick<FileUpload, "ext" | "hash" | "mime" | "name" | "url"> & {
  path: string;
};

const uploadFile = async (strapi: Strapi, file: UploadFile, user: User) => {
  const { ext, hash, mime, name, path, url } = file;

  const fileStat = statSync(path);

  const uploadedFile = await strapi.entityService.create(
    "plugin::upload.file",
    {
      data: {
        createdBy: user.id,
        ext,
        folderPath: "/",
        hash,
        mime,
        name,
        provider: "local",
        size: fileStat.size,
        updatedBy: user.id,
        url,
      },
    }
  );

  return uploadedFile;
};

export default uploadFile;
