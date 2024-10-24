import Agriculture from "../assets/categorias/agriculture.svg";
import Apartment from "../assets/categorias/apartment.svg";
import Bicycle from "../assets/categorias/bicycle.svg";
import Car from "../assets/categorias/car.svg";
import Computer from "../assets/categorias/computer.svg";
import Exchange from "../assets/categorias/exchange.svg";
import Furniture from "../assets/categorias/furniture.svg";
import Home from "../assets/categorias/home.svg";
import Kids from "../assets/categorias/kids.svg";
import Mobile from "../assets/categorias/mobile.svg";
import Notification from "../assets/categorias/notification.svg";
import Pets from "../assets/categorias/pets.svg";
import Polo from "../assets/categorias/polo.svg";
import Sale from "../assets/categorias/sale.svg";
import Sports from "../assets/categorias/sports.svg";
import Work from "../assets/categorias/work.svg";

export interface Categoria {
  name: string;
  subName: string;
  images: {
    svg: string;
  };
}

export const Categorias: Categoria[] = [
  {
    name: "Promoçoes",
    subName: "Promo",
    images: {
      svg: Sale,
    },
  },
  {
    name: "Eletronicos",
    subName: "Eletro",
    images: {
      svg: Computer,
    },
  },
  {
    name: "Celulares",
    subName: "Celulares",
    images: {
      svg: Mobile,
    },
  },
  {
    name: "Aleatório",
    subName: "Aleatório",
    images: {
      svg: Exchange,
    },
  },
  {
    name: "Automóveis",
    subName: "Autos",
    images: {
      svg: Car,
    },
  },
  {
    name: "Mobilha",
    subName: "Mobilha",
    images: {
      svg: Furniture,
    },
  },

  {
    name: "Bicicletas",
    subName: "Bicicletas",
    images: {
      svg: Bicycle,
    },
  },

  {
    name: "Casa & Jardim",
    subName: "Casa",
    images: {
      svg: Home,
    },
  },
  {
    name: "Animais",
    subName: "Animais",
    images: {
      svg: Pets,
    },
  },
  {
    name: "Esportes",
    subName: "esportes",
    images: {
      svg: Sports,
    },
  },
  {
    name: "Moda",
    subName: "Moda",
    images: {
      svg: Polo,
    },
  },
  {
    name: "Trabalho",
    subName: "Trabalho",
    images: {
      svg: Work,
    },
  },
  {
    name: "Aluguel",
    subName: "Aluguel",
    images: {
      svg: Apartment,
    },
  },

  {
    name: "Crianças",
    subName: "Crianças",
    images: {
      svg: Kids,
    },
  },
  {
    name: "Serviços",
    subName: "Serviços",
    images: {
      svg: Notification,
    },
  },
  {
    name: "Agricultura",
    subName: "Agro",
    images: {
      svg: Agriculture,
    },
  },
];
