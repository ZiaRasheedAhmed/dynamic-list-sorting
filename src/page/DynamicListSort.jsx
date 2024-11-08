import { useEffect, useState } from "react";
import "../App.css";
import ItemList from "../components/ItemList/ItemList";
import Search from "../components/Search/Search";
import useSearchSort from "../components/CustomHook/SearchSort";

const dataItems = [
  {
    id: 1,
    title: "Laptop Backpack",
    content: "A cool laptop backpack A laptop backpack is a versatile and protective bag specifically designed to carry laptops and other tech essentials securely and comfortably. ",
    date: "2023-11-05",
  },
  {
    id: 2,
    title: "Essence Mascara Lash Princess",
    content:
      "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    date: "2023-10-06",
  },
  {
    id: 3,
    title: "Casual T-Shirt for Men",
    content:
      "A casual T-shirt for men is a staple wardrobe item, offering comfort, simplicity, and versatility for everyday wear. Typically made from soft, breathable fabrics like cotton.",
    date: "2023-11-07",
  },
  {
    id: 4,
    title: "Mens Cotton Jacke",
    content:
      "A men's cotton jacket is a versatile, comfortable layer perfect for transitioning between seasons. Crafted from durable and breathable cotton fabric.",
    date: "2023-11-08",
  },
  {
    id: 5,
    title: "Mens Casual Slim Fit",
    content:
      "The Men's Casual Slim Fit is a contemporary, stylish piece designed to provide a modern, tailored look without sacrificing comfort.",
    date: "2023-10-09",
  },
  {
    id: 6,
    title: "Women's Gold & Silver Bracelet",
    content:
      "The Women's Gold & Silver Bracelet is a stunning and elegant accessory designed to complement any outfit with a touch of sophistication.",
    date: "2023-11-10",
  },
  {
    id: 7,
    title: "Solid Gold Petite Micropave",
    content:
      "The Solid Gold Petite Micropavé ring is a beautifully crafted, delicate piece that showcases timeless elegance with a modern touch. Made from solid gold.",
    date: "2023-11-11",
  },
  {
    id: 8,
    title: "White Gold Plated Princess",
    content:
      "The White Gold Plated Princess ring is a stunning and elegant piece designed to make a statement with its radiant sparkle and timeless style.",
    date: "2023-10-12",
  },
  {
    id: 9,
    title: "Gold-plated Earrings",
    content:
      "Gold-Plated Earrings are a versatile and chic accessory, ideal for adding a touch of elegance to any look. Made from high-quality materials, these earrings feature.",
    date: "2023-11-13",
  },
  {
    id: 10,
    title: "Apple",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    date: "2023-11-14",
  },
  {
    id: 11,
    title: "Banana",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    date: "2023-10-15",
  },
  {
    id: 12,
    title: "Orange",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    date: "2023-11-16",
  },
];


const DynamicListSort = () => {
    const [data, setData] = useState([]);
    const [searchItem, setSearchItem] = useState('');
    const [order, setOrder] = useState('default');
  
    useEffect(()=>{
      setData(dataItems);
    }, []);
  
    const searchSortHook = useSearchSort(data, searchItem, order);
  
    return (
        <div className="components">
          <Search searchItem={searchItem} setSearchItem={setSearchItem} order={order} setOrder={setOrder}/>
          <ItemList data={searchSortHook} />
        </div>
    );
}

export default DynamicListSort
