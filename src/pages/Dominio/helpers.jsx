export const dominiosLista = [
    {
      id: 1,
      name: "com",
      price: 24_900,
      category: "Popular",
    },
    {
      id: 2,
      name: "ao",
      price: 24_900,
      category: "Other",
    },
    {
      id: 3,
      name: "org.ao",
      price: 24_900,
      category: "Other",
    },
    {
      id: 4,
      name: "edu.ao",
      price: 34_900,
      category: "Other",
    },
    {
      id: 5,
      name: "it.ao",
      price: 34_900,
      category: "Other",
    },
    {
      id: 6,
      name: "co",
      price: 34_900,
      category: "Other",
    },
    {
      id: 7,
      name: "net",
      price: 24_900,
      category: "Popular",
    },
    {
      id: 8,
      name: "org",
      price: 24_900,
      category: "Popular",
    },
    {
      id: 9,
      name: "info",
      price: 29_900,
      category: "Popular",
    },
  ];

export function number_format(price) {
    let vlformat = "";
    let vl = new String(price);
    switch (vl.length) {
      case 5:
        vlformat = `${vl.slice(0, 2) + "." + vl.slice(2, vl.length)},00`;
        break;
      case 6:
        vlformat = `${vl.slice(0, 3) + "." + vl.slice(3, vl.length)},00`;
        break;
      case 7:
        vlformat = `${
          vl.slice(0, 1) + "." + vl.slice(1, 4) + "." + vl.slice(4, vl.length)
        },00`;
        break;

      default:
        break;
    }
    return vlformat;
  }
