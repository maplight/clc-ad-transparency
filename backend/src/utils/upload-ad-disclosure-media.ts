import { faker } from "@faker-js/faker";
import { Attribute, Strapi } from "@strapi/strapi";
import uploadFile from "./upload-file";
import { join } from "path";
import { readdirSync } from "fs";
import mime from "mime/lite";

type User = Attribute.GetValues<"admin::user">;

const uploadAdDisclosureMedia = async (
  strapi: Strapi,
  currentUser: User,
  users: User[]
) => {
  const adDisclosureMediaFilenames = readdirSync(
    join(__dirname, "../../../public/ad-disclosure-media")
  );

  // Split media files evenly between users
  const userIndex = users.findIndex(({ id }) => id === currentUser.id);
  const userMediaFileCount = Math.ceil(
    adDisclosureMediaFilenames.length / users.length
  );
  const userMediaFileStartIndex = userIndex * userMediaFileCount;
  const userMediaFileEndIndex = userMediaFileStartIndex + userMediaFileCount;
  const userMediaFilenames = adDisclosureMediaFilenames.slice(
    userMediaFileStartIndex,
    userMediaFileEndIndex
  );

  const mediaUploads = [];

  for (const filename of userMediaFilenames) {
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
