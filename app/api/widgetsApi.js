import dollar from "../assets/icons/icons_currency_dollar.svg";
import euro from "../assets/icons/icons_currency_euro.svg";
import btc from "../assets/icons/icons_currency_btc.svg";

const data = [
  {
    icon: dollar,
    value: "96.34",
  },
  {
    icon: euro,
    value: "104.61",
  },
  {
    icon: btc,
    value: "25.725",
  },
];

function getWidgetsData() {
    return Promise.resolve(data)
}

export default getWidgetsData 
