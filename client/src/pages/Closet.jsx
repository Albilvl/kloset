import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Modal, Panel, SelectPicker } from "rsuite";
import ItemCard from "../components/ItemCard";

function Closet({ user }) {
  let navigate = useNavigate();

  const [itemSearch, setItemSearch] = useState("");
  const [myArray, setMyArray] = useState([]);
  const [open, setOpen] = useState(false);
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [item_type, setItem_type] = useState("");
  const [weather, setWeather] = useState("");
  const [occasion, setOccasion] = useState("");
  const [color, setColor] = useState("");
  const [dirty, setDirty] = useState("");
  const [image, setImage] = useState("");

  const typeOptions = [
    {
      label: "Jacket",
      value: "Jacket",
      style: "Top",
    },
    {
      label: "Coat",
      value: "Coat",
      style: "Top",
    },
    {
      label: "Shirt",
      value: "Shirt",
      style: "Top",
    },
    {
      label: "T-shirt",
      value: "T-shirt",
      style: "Top",
    },
    {
      label: "Flannel",
      value: "Flannel",
      style: "Top",
    },
    {
      label: "Hat",
      value: "Hat",
      style: "Top",
    },
    {
      label: "Cargo",
      value: "Cargo",
      style: "Pants",
    },
    {
      label: "Sweats",
      value: "Sweats",
      style: "Pants",
    },
    {
      label: "Jeans",
      value: "Jeans",
      style: "Pants",
    },
    {
      label: "Shorts",
      value: "Shorts",
      style: "Pants",
    },
    {
      label: "Leggings",
      value: "Leggings",
      style: "Pants",
    },
    {
      label: "Sneaker",
      value: "Sneaker",
      style: "Shoes",
    },
    {
      label: "Slides",
      value: "Slides",
      style: "Shoes",
    },
    {
      label: "Formal",
      value: "Formal",
      style: "Shoes",
    },
  ];

  const weatherOptions = [
    {
      label: "Cold",
      value: "Cold",
    },
    {
      label: "Cool",
      value: "Cool",
    },
    {
      label: "Warm",
      value: "Warm",
    },
    {
      label: "Hot",
      value: "Hot",
    },
  ];

  const occasionOptions = [
    {
      label: "Formal",
      value: "Formal",
    },
    {
      label: "Casual",
      value: "Casual",
    },
  ];

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const items = [
    {
      id: 1,
      name: "Logo Tee",
      brand: "Balenciaga",
      image:
        "https://balenciaga.dam.kering.com/m/6de9b3c17e12d71d/Medium-641675TKVJ19034_F.jpg?v=1",
      type: "jacket",
      weather: "overcast",
      occassion: "Casual",
      color: "blue",
    },
    {
      id: 2,
      name: "Green Monster Jacket",
      brand: "Balenciaga",
      image:
        "https://balenciaga.dam.kering.com/m/33a5bcda606d45d/Medium-704502TKQ073001_F.jpg?v=2",
      type: "jacket",
      weather: "overcast",
      occassion: "Night out",
      color: "blue",
    },
    {
      id: 3,
      name: "Ripped Everyday Denim",
      brand: "Gucci",
      image:
        "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1595320207/623953_XDBFM_4009_001_100_0000_Light-Ripped-eco-bleached-organic-denim-pant.jpg",
      type: "jacket",
      weather: "overcast",
      occassion: "Night out",
      color: "blue",
    },
    {
      id: 4,
      name: "1921 Sweatshirt",
      brand: "Gucci",
      image:
        "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1633644909/617964_XJDZE_9088_001_100_0000_Light-Crystal-1921-Gucci-sweatshirt.jpg",
      type: "jacket",
      weather: "overcast",
      occassion: "Night out",
      color: "blue",
    },
    {
      id: 5,
      name: "Downtown Leather Sneakers",
      brand: "Prada",
      image:
        "https://www.prada.com/content/dam/pradabkg_products/2/2EE/2EE364/3LKGF098Z/2EE364_3LKG_F098Z_SLR.jpg/jcr:content/renditions/cq5dam.web.hebebed.1250.1250.jpg,https://www.prada.com/content/dam/pradabkg_products/2/2EE/2EE364/3LKGF098Z/2EE364_3LKG_F098Z_SLR.jpg/jcr:content/renditions/cq5dam.web.hebebed.2000.2000.jpg",
      type: "shoes",
      weather: "overcast",
      occassion: "Night out",
      color: "blue",
    },
  ];

  const instance = (
    <div className="add">
      <Panel
        shaded
        bordered
        bodyFill
        style={{ display: "inline-block", width: 240 }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Squared_plus.svg/1200px-Squared_plus.svg.png"
          height="240"
          onClick={handleOpen}
        />
        <Panel header="GRAIL" className="rs-theme-dark">
          <p>Add your newest item.</p>
        </Panel>
      </Panel>
    </div>
  );

  const displayedItems = myArray.filter((piece) => {
    return (
      piece.name.toLowerCase().includes(itemSearch.toLowerCase()) ||
      piece.brand.toLowerCase().includes(itemSearch.toLowerCase())
    );
  });

  function addItem() {
    setDirty(false);

    const newItem = {
      brand,
      name,
      item_type,
      weather,
      occasion,
      color,
      dirty,
      image,
    };

    fetch("/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.id === undefined) {
          alert("Error");
        } else {
          setOpen(false);
        }
      });
  }

  useEffect(() => {
    fetch("/myItems", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((array) => setMyArray(array));
  }, []);

  function deleteItem(deletedItem) {
    fetch(`/remove/${deletedItem.id}.`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then(() => {
        const updatedShoes = myArray.filter(
          (shoe) => shoe.id !== deletedItem.id
        );
        setMyArray(updatedShoes);
      });
  }

  return (
    <div className="closet">
      <h1>{user.username}'s Closet</h1>
      <h3>ADD, ORGANIZE, SORT, DELETE AND MANAGE EVERYTHING IN YOUR Closet</h3>
      <hr />
      <Input
        placeholder="Search......"
        onChange={(e) => {
          setItemSearch(e);
        }}
      />
      <hr />
      <div className="itemContainer">
        {instance}
        {displayedItems.map((item) => (
          <ItemCard item={item} key={item.id} handleClick={deleteItem} />
        ))}
        {displayedItems.length === 0 && <h3>uh oh....</h3>}
      </div>
      <Modal open={open} onClose={handleClose} size="xs">
        <Modal.Header>
          <Modal.Title>Add Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form fluid>
            <Form.Group controlId="name-8">
              <Form.ControlLabel>Brand</Form.ControlLabel>
              <Form.Control
                name="brand"
                onChange={(e) => {
                  setBrand(e);
                }}
              />
            </Form.Group>
            <Form.Group controlId="name-9">
              <Form.ControlLabel>Name</Form.ControlLabel>
              <Form.Control
                name="name"
                onChange={(e) => {
                  setName(e);
                }}
              />
            </Form.Group>
            <Form.Group controlId="select-10">
              <Form.ControlLabel>Item Type</Form.ControlLabel>
              <SelectPicker
                data={typeOptions}
                groupBy="style"
                onChange={(e) => setItem_type(e)}
              />
            </Form.Group>
            <Form.Group controlId="select-10">
              <Form.ControlLabel>Weather</Form.ControlLabel>
              <SelectPicker
                data={weatherOptions}
                onChange={(e) => setWeather(e)}
              />
            </Form.Group>
            <Form.Group controlId="select-10">
              <Form.ControlLabel>Occasion</Form.ControlLabel>
              <SelectPicker
                data={occasionOptions}
                onChange={(e) => setOccasion(e)}
              />
            </Form.Group>
            <Form.Group controlId="select-10">
              <Form.ControlLabel>Color</Form.ControlLabel>
              <Form.Control name="color" onChange={(e) => setColor(e)} />
            </Form.Group>
            <Form.Group controlId="select-11">
              <Form.ControlLabel>image</Form.ControlLabel>
              <Form.Control name="image" onChange={(e) => setImage(e)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={addItem} appearance="primary">
            Confirm
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Closet;
