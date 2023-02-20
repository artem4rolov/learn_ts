export {};

interface DataModel {
  id: string;
  title: string;
  elements: {
    header: {
      title: string;
      descriprion: string;
      links: string[];
    };
    footer: {
      descriprion: string;
      links: string[];
    };
    body: [{ title: string; content: {} }];
  };
}

type T0 = DataModel["elements"]["footer"];

type someTuple = [number, string, boolean, ...string[]];
const arr: someTuple = [1, "asdd", true, "das"];

type T1 = someTuple[1];

const sizes = ["small", "medium", "large"] as const;

// достаем union из readonly массива sizes с помощью number (по индексу элементов в массиве)
type T2 = typeof sizes[number];
