import { atom } from "recoil";

export const titleState = atom({
  key: "title",
  default: "title is null",
});

export const creatorState = atom({
  key: "creator",
  default: "creator is null",
});

export const ManifestState = atom({
  key: "manifest",
  default: ["null"],
});

export const ContentState = atom({
  key: "content",
  default: ["Select Epub"],
});

export const ImageListState = atom({
  key: "imageList",
  default: {},
});

export const CSSState = atom({
  key: "CSS",
  default: "",
});
