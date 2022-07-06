import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Panel, Modal, Form, SelectPicker, Button } from "rsuite";
import ItemCard from "../components/ItemCard";

function Grails() {
  let navigate = useNavigate();
  
  const [itemSearch, setItemSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
    textarea: "",
  });



  const typeOptions = [
    {
      "label" : 'Jacket',
      "value" : 'Jacket',
      "style" : "Top"
    },
    {
      "label" : 'Coat',
      "value" : 'Coat',
      "style" : "Top"
    },
    {
      "label" : 'Shirt',
      "value" : 'Shirt',
      "style" : "Top"
    },
    {
      "label" : 'T-shirt',
      "value" : 'T-shirt',
      "style" : "Top"
    },
    {
      "label" : 'Flannel',
      "value" : 'Flannel',
      "style" : "Top"
    },
    {
      "label" : 'Hat',
      "value" : 'Hat',
      "style" : "Top"
    },
    {
      "label" : 'Cargo',
      "value" : 'Cargo',
      "style" : "Pants"
    },
    {
      "label" : 'Sweats',
      "value" : 'Sweats',
      "style" : "Pants"
    },
    {
      "label" : 'Jeans',
      "value" : 'Jeans',
      "style" : "Pants"
    },
    {
      "label" : 'Shorts',
      "value" : 'Shorts',
      "style" : "Pants"
    },
    {
      "label" : 'Leggings',
      "value" : 'Leggings',
      "style" : "Pants"
    },
    {
      "label" : 'Sneaker',
      "value" : 'Sneaker',
      "style" : "Shoes"
    },
    {
      "label" : 'Slides',
      "value" : 'Slides',
      "style" : "Shoes"
    },
    {
      "label" : 'Formal',
      "value" : 'Formal',
      "style" : "Shoes"
    },
  ]

  const weatherOptions = [
    {
      "label" : 'Cold',
      "value" : 'Cold',
    },
    {
      "label" : 'Cool',
      "value" : 'Cool',
    },
    {
      "label" : 'Warm',
      "value" : 'Warm',
    },
    {
      "label" : 'Hot',
      "value" : 'Hot',
    },
  ]

  const occasionOptions = [
    {
      "label" : 'Formal',
      "value" : 'Formal',
    },
    {
      "label" : 'Casual',
      "value" : 'Casual',
    },

  ]

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


  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };


  const displayedItems = items.filter((piece) => {
    return (
      piece.name.toLowerCase().includes(itemSearch.toLowerCase()) ||
      piece.brand.toLowerCase().includes(itemSearch.toLowerCase())
    );
  });

  const instance = (
    <div className = "add">
      <Panel
        shaded
        bordered
        bodyFill
        style={{ display: "inline-block", width: 240 }}
        onClick={handleOpen}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Squared_plus.svg/1200px-Squared_plus.svg.png"
          height="240"
        />
        <Panel header="GRAIL" className="rs-theme-dark">
          <p>Add your newest want.</p>
        </Panel>
      </Panel>
    </div>
  );

  return (
    <div className="closet">
      <h1>Grails</h1>
      <h3>Everything you want in one place</h3>
      <hr />
      <Input
        placeholder="Search......"
        onChange={(e) => {
          setItemSearch(e);
        }}
      />
      <br />

      <hr />
      <div className="itemContainer">
        {instance}
        {displayedItems.map((item) => (
          <ItemCard item={item} key={item.id} />
        ))}
        {displayedItems.length === 0 && <h3>uh oh....</h3>}
      </div>
      <Modal open={open} onClose={handleClose} size="xs">
        <Modal.Header>
          <Modal.Title>Add Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form fluid onChange={setFormValue} formValue={formValue}>
            <Form.Group controlId="name-9">
              <Form.ControlLabel>Name</Form.ControlLabel>
              <Form.Control name="name" />
            </Form.Group>
            <Form.Group controlId="select-10">
              <Form.ControlLabel>Item Type</Form.ControlLabel>
              <SelectPicker data={typeOptions} groupBy="style"/>
            </Form.Group>
            <Form.Group controlId="select-10">
              <Form.ControlLabel>Weather</Form.ControlLabel>
              <SelectPicker data={weatherOptions}/>
            </Form.Group>
            <Form.Group controlId="select-10">
              <Form.ControlLabel>Occasion</Form.ControlLabel>
              <SelectPicker data={occasionOptions} />
            </Form.Group>
            <Form.Group controlId="select-10">
              <Form.ControlLabel>Color</Form.ControlLabel>
              <Form.Control name="color" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="primary">
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

export default Grails;
