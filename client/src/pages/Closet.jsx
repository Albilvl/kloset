import {React, useState} from "react";
import { Input } from "rsuite";
import ItemCard from "../components/ItemCard";

function Closet() {
     
    const[itemSearch, setItemSearch] = useState("")


    const items = [
        {
            id: 1,
            name: "Logo Tee",
            brand: 'Balenciaga',
            image: "https://balenciaga.dam.kering.com/m/6de9b3c17e12d71d/Medium-641675TKVJ19034_F.jpg?v=1",
            type: "jacket",
            weather: "overcast",
            occassion: "Casual",
            color: "blue"
          },
        {
            id: 2,
            name: "Green Monster Jacket",
            brand: 'Balenciaga',
            image: "https://balenciaga.dam.kering.com/m/33a5bcda606d45d/Medium-704502TKQ073001_F.jpg?v=2",
            type: "jacket",
            weather: "overcast",
            occassion: "Night out",
            color: "blue"
          },
        {
            id: 3,
            name: "Ripped Everyday Denim",
            brand: 'Gucci',
            image: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1595320207/623953_XDBFM_4009_001_100_0000_Light-Ripped-eco-bleached-organic-denim-pant.jpg",
            type: "jacket",
            weather: "overcast",
            occassion: "Night out",
            color: "blue"
          },
        {
            id: 4,
            name: "1921 Sweatshirt",
            brand: 'Gucci',
            image: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1633644909/617964_XJDZE_9088_001_100_0000_Light-Crystal-1921-Gucci-sweatshirt.jpg",
            type: "jacket",
            weather: "overcast",
            occassion: "Night out",
            color: "blue"
          },
        {
            id: 5,
            name: "Downtown Leather Sneakers",
            brand: 'Prada',
            image: "https://www.prada.com/content/dam/pradabkg_products/2/2EE/2EE364/3LKGF098Z/2EE364_3LKG_F098Z_SLR.jpg/jcr:content/renditions/cq5dam.web.hebebed.1250.1250.jpg,https://www.prada.com/content/dam/pradabkg_products/2/2EE/2EE364/3LKGF098Z/2EE364_3LKG_F098Z_SLR.jpg/jcr:content/renditions/cq5dam.web.hebebed.2000.2000.jpg",
            type: "shoes",
            weather: "overcast",
            occassion: "Night out",
            color: "blue"
          },
    ]



    const displayedItems = items.filter((piece) => {
        return (
          piece.name.toLowerCase().includes(itemSearch.toLowerCase()) ||
          piece.brand.toLowerCase().includes(itemSearch.toLowerCase())
        );
      });



  return (
    <div className="closet">
      <h1>User's Closet</h1>
      <h3>ADD, ORGANIZE, SORT, DELETE AND MANAGE EVERYTHING IN YOUR Closet</h3>
      <hr />
      <Input placeholder="Search......"  onChange={(e)=>{setItemSearch(e)}}/>
      <hr/>
      <div className="itemContainer">
          {displayedItems.map(item =>(
          <ItemCard item= {item} key ={item.id}/>
      ))}
      {displayedItems.length === 0 && <h3 >uh oh....</h3>}
      </div>
      
    </div>
  );
}

export default Closet;
