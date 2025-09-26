import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export const dominiosLista = [
  {
    id: 1,
    name: "com",
    price: 20_000,
    category: "Popular",
  },
  {
    id: 2,
    name: "ao",
    price: 30_000,
    category: "Other",
  },
  {
    id: 3,
    name: "co.ao",
    price: 40_000,
    category: "Other",
  },
  {
    id: 4,
    name: "net",
    price: 30_000,
    category: "Other",
  },
  {
    id: 5,
    name: "org",
    price: 30_000,
    category: "Other",
  },
  {
    id: 6,
    name: "online",
    price: 20_000,
    category: "Other",
  },
  {
    id: 7,
    name: "shop",
    price: 15_000,
    category: "Popular",
  },
  {
    id: 8,
    name: "site",
    price: 20_000,
    category: "Popular",
  },
  {
    id: 9,
    name: "website",
    price: 20_000,
    category: "Popular",
  },
];

export const redesSociais = [
  {
    id: 1,
    link: "http://wa.me:954979242",
    name: "Whatsapp",
    icon: (
      //lg:text-green-700 lg:bg-white text-7xl lg:border lg:border-gray-300
      <FaWhatsapp className="rounded-[50%] w-[50px] md:w-[60px] h-[50px] md:h-[60px] md:p-2 p-1 lg:w-[50px] lg:h-[50px] lg:p-3 bg-green-700 text-white" />
    ),
  },
  {
    id: 2,
    link: "tel:954979242",
    name: "Telefone",
    icon: (
      //lg:bg-white lg:text-blue-400 text-5xl lg:border lg:border-gray-300
      <FaPhoneAlt className="rounded-[50%] w-[50px] md:w-[60px] h-[50px] md:h-[60px] md:p-2 p-2 text-center lg:w-[50px] lg:h-[50px] lg:p-3 bg-blue-400 text-white" />
    ),
  },
  {
    id: 32,
    link: "https://www.google.com/maps/place/S%C3%A3o+Paulo,+Luanda/@-8.8141228,13.2529595,16.75z/data=!4m15!1m8!3m7!1s0x1a51f231f203e2f1:0x9c007ac3b89c6b76!2sS%C3%A3o+Paulo,+Luanda!3b1!8m2!3d-8.813636!4d13.2540836!16s%2Fg%2F11gzbqv9s!3m5!1s0x1a51f231f203e2f1:0x9c007ac3b89c6b76!8m2!3d-8.813636!4d13.2540836!16s%2Fg%2F11gzbqv9s?entry=ttu&g_ep=EgoyMDI1MDkyMi4wIKXMDSoASAFQAw%3D%3D",
    name: "Combatentes",
    icon: (
      // lg:bg-white lg:text-red-700 lg:border lg:border-gray-300
      <FaLocationDot className="rounded-[50%] w-[50px] md:w-[60px] h-[50px] md:h-[60px] md:p-2 p-2 lg:w-[50px] lg:h-[50px] lg:p-3 bg-red-700 text-white" />
    ),
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
