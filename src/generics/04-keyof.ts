type WindowProp = keyof Window;

const myValue: WindowProp = "document";

interface PC {
  brand: string;
  year: string;
}

// даем возможность новым создаваемым знаениям использовать ключи brand и year
type Typ1 = keyof PC; // здесь будет union с двумя значениями - brand и year

const val1: Typ1 = "brand";

// даем возможность новым создаваемым знаениям использовать методы чисел и строк
type Tup1 = keyof [string, number];

const val2: Tup1 = "concat";
