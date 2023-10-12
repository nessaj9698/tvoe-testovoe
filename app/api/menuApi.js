import feedIcon from "../assets/icons/icons_menu_feed.svg";
import attentionIcon from "../assets/icons/icons_menu_attention.svg";
import avtoIcon from "../assets/icons/icons_menu_avto.svg";
import buisnessIcon from "../assets/icons/icons_menu_buisness.svg";
import healthIcon from "../assets/icons/icons_menu_health.svg";
import cryptoIcon from "../assets/icons/icons_menu_crypto.svg";
import estateIcon from "../assets/icons/icons_menu_estate.svg";
import educationIcon from "../assets/icons/icons_menu_edu.svg";
import politicsIcon from "../assets/icons/icons_menu_politics.svg";
import tourismIcon from "../assets/icons/icons_menu_tourism.svg";
import showIcon from "../assets/icons/icons_menu_show.svg";
import sportIcon from "../assets/icons/icons_menu_sport.svg";
import styleIcon from "../assets/icons/icons_menu_style.svg";
import scienceIcon from "../assets/icons/icons_menu_science.svg";
import economyIcon from "../assets/icons/icons_menu_economy.svg";

const menuData = [
  {
    title: "Лента",
    iconUrl: feedIcon,
    link: "/",
  },
  {
    title: "Происшествия",
    iconUrl: attentionIcon,
    link: "#",
  },
  {
    title: "Авто",
    iconUrl: avtoIcon,
    link: "#",
  },
  {
    title: "Бизнес",
    iconUrl: buisnessIcon,
    link: "#",
  },
  {
    title: "Здоровье",
    iconUrl: healthIcon,
    link: "#",
  },
  {
    title: "Крипто",
    iconUrl: cryptoIcon,
    link: "#",
  },
  {
    title: "Недвижимость",
    iconUrl: estateIcon,
    link: "#",
  },
  {
    title: "Образование",
    iconUrl: educationIcon,
    link: "#",
  },
  {
    title: "Политика",
    iconUrl: politicsIcon,
    link: "#",
  },
  {
    title: "Туризм",
    iconUrl: tourismIcon,
    link: "#",
  },
  {
    title: "Шоу-бизнес",
    iconUrl: showIcon,
    link: "#",
  },
  {
    title: "Спорт",
    iconUrl: sportIcon,
    link: "#",
  },
  {
    title: "Стиль",
    iconUrl: styleIcon,
    link: "#",
  },
  {
    title: "Наука и технологии",
    iconUrl: scienceIcon,
    link: "#",
  },
  {
    title: "Экономика",
    iconUrl: economyIcon,
    link: "#",
  },
];


const fetchMenus = () => {
    return Promise.resolve(menuData)
}

export default fetchMenus