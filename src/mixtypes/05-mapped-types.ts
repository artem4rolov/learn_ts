type PcBrand = {
  name: string;
  country: string;
  createdAt: Date;
};

type WellKnownBrands =
  | "apple"
  | "lenovo"
  | "hp"
  | "dell"
  | "microsoft"
  | "huawei";

// динамичские опциональные ключи
type MyPcRecord = {
  [BrandKey in WellKnownBrands]?: PcBrand;
};

const brandRecord: MyPcRecord = {
  apple: {
    country: "usa",
    createdAt: new Date(),
    name: "mac",
  },
};

function printPcCatalog(pcCatalog: MyPcRecord) {
  console.log(pcCatalog.apple?.country);
}

type PartOfWindow = {
  [key in "document" | "screen" | "navigator"]?: Window[key];
};

const p: PartOfWindow = {
  screen: window.screen,
};

export {};
