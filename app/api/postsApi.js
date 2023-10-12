import Like from "../assets/icons/emoji_like.svg";
import DisLike from "../assets/icons/emoji_dislike.svg";
import Poop from "../assets/icons/emoji_poop.svg";
import Comment from "../assets/icons/icons_meta_reviews.svg";
import Reposts from "../assets/icons/icons_meta_reposts.svg";
import PostThumb1 from "../assets/post_thumb_1.jpg";
import PostThumb2 from "../assets/post_thumb_2.jpg";
import PostThumb3 from "../assets/post_thumb_3.jpg";
import PostThumb4 from "../assets/post_thumb_4.jpg";

const reactions = [
  {
    title: "like",
    value: 23,
    icon: Like,
  },
  {
    title: "dislike",
    value: 23,
    icon: DisLike,
  },
  {
    title: "poop",
    value: 23,
    icon: Poop,
  },
  {
    title: "comment",
    value: 7,
    icon: Comment,
  },
  {
    title: "reposts",
    value: 14,
    icon: Reposts,
  },
];

const feed = [
  {
    id: 1,
    title: "Сотни россиян застряли в Египте из-за отмен рейсов.",
    time: "14:59",
    src: `/posts/1`,
    category: "Политика",
  },
  {
    id: 2,
    title:
      "На Украине заявили о невосполнимых потерях после российских ударов.",
    time: "14:59",
    src: `/posts/2`,
    category: "Политика",
  },
  {
    id: 3,
    title:
      "ЕС ввел санкции против силовиков из Крыма из-за дела в отношении журналиста.",
    time: "14:59",
    src: `/posts/3`,
    category: "Политика",
  },
  {
    id: 4,
    title:
      "Резников назвал профессионалом нового министра обороны Украины Умерова.",
    time: "14:59",
    src: `/posts/4`,
    category: "Политика",
  },
];

const hotNews = {
  title: "ОЧЕНЬ ВАЖНАЯ НОВОСТЬ",
};

const reedAlso = [
  {
    title: "Синоптик спрогнозировал срок наступления бабьего лета",
    time: "1.01.2023, 13:53",
    category: "Политика",
    link:'#',
    reactions,
  },
  {
    title:
      "Дмитрий Медведев проголосовал онлайн на выборах мэра Москвы.",
    time: "1.01.2023, 13:53",
    category: "Политика",
    link:'#',
    reactions,
  },
  {
    title:
      "Раскрыты последствия уничтожения беспилотника в небе над Подмосковьем",
    time: "1.01.2023, 13:53",
    category: "Политика",
    link:'#',
    reactions,
  },
  {
    title:
      "Невролог назвала основные способы лечения мигрени",
    time: "1.01.2023, 13:53",
    category: "Политика",
    link:'#',
    reactions,
  },
];

const incidents = [
  {
    title:
      "Фура въехала в группу юных велосипедистов под Выборгом: двое детей погибли",
    time: "1.01.2023, 13:53",
    link:'#',
    thumbnail: PostThumb1,
    reactions,
  },
  {
    title:
      "Семилетняя девочка из Екатеринбурга умерла после купания в Черном море",
    time: "1.01.2023, 13:53",
    link:'#',
    thumbnail: PostThumb2,
    reactions,
  },
  {
    title: "Теннис — спорт леди и джентльменов. Как разобраться в нем?",
    time: "1.01.2023, 13:53",
    link:'#',
    thumbnail: PostThumb3,
    reactions,
  },
  {
    title:
      "Как скейтбординг стал популярным видом спорта и модной субкультурой?",
    time: "1.01.2023, 13:53",
    link:'#',
    thumbnail: PostThumb4,
    reactions,
  },
];

const posts = {
  feed,
  hotNews,
  reedAlso,
  incidents,
};

const getPosts = () => {
  return Promise.resolve(posts);
};

export default getPosts;
