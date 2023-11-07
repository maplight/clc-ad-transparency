import { faker } from "@faker-js/faker";
import { Attribute, Strapi } from "@strapi/strapi";
import uploadFile from "./upload-file";
import { join } from "path";
import { readdirSync } from "fs";
import mime from "mime/lite";

type User = Attribute.GetValues<"admin::user">;

const uploadAdDisclosureMedia = async (strapi: Strapi, currentUser: User) => {
  // Get list of directories in public/ad-disclosure-media
  const adDisclosureMediaDirectories = readdirSync(
    join(__dirname, "../../../public/ad-disclosure-media"),
    { withFileTypes: true }
  ).filter((dirent) => dirent.isDirectory());

  const randomAdDisclosureMediaDirectory = faker.helpers.arrayElement(
    adDisclosureMediaDirectories
  ).name;

  // Get list of media files in a random directory
  const adDisclosureMediaFilenames = readdirSync(
    join(
      __dirname,
      "../../../public/ad-disclosure-media",
      randomAdDisclosureMediaDirectory
    )
  );

  const mediaUploads = [];

  for (const filename of adDisclosureMediaFilenames) {
    const mediaUpload = uploadFile(
      strapi,
      {
        data: {
          refId: Date.now().toString(),
          ref: "api::ad-disclosure.ad-disclosure",
          field: "adMedia",
        },
        file: {
          path: join(
            __dirname,
            "../../../public/ad-disclosure-media",
            randomAdDisclosureMediaDirectory,
            filename
          ),
          name: `${faker.string.uuid()}--${filename}`,
          type: mime.getType(filename),
        },
      },
      currentUser
    );

    mediaUploads.push(mediaUpload);
  }

  return Promise.all(mediaUploads);
};

export default uploadAdDisclosureMedia;
