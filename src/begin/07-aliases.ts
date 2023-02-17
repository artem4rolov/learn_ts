type MyBoolean = false | true;

type Pair = [string, string];
type Pairs = Pair[];

type DiffCar = {
  wheels: number;
  brand: string;
  type: string;
  isNew?: boolean;
  name?: string;

  // для добавления других неизвестных ключей (динамические свойства)
  [key: string]: unknown;
};
