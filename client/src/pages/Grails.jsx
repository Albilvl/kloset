import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Divider,
  Form,
  Input,
  Modal,
  Panel,
  SelectPicker,
} from "rsuite";
import GrailCard from "../components/GrailCard";
import ItemCard from "../components/ItemCard";
import Loading from "../components/Loading";

function Grails() {
  let navigate = useNavigate();

  const [itemSearch, setItemSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [myArray, setMyArray] = useState([]);
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [grail_type, setGrail_type] = useState("");
  const [weather, setWeather] = useState("");
  const [occasion, setOccasion] = useState("");
  const [color, setColor] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [base64TextString, setBase64TextString] = useState("");
  const [pic, setPic] = useState({});

  const typeOptions = [
    {
      label: "Hat",
      value: "Accessories",
      style: "Accessories",
    },
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
    {
      label: "Handbag",
      value: "Handbag",
      style: "Bag",
    },
    {
      label: "Backpack",
      value: "Backpack",
      style: "Bag",
    },
    {
      label: "Messenger and Crossbody",
      value: "Messenger and Crossbody",
      style: "Bag",
    },
  ];

  const weatherOptions = [
    {
      label: "All Weather",
      value: "All Weather",
    },
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
    {
      label: "Both",
      value: "Both",
    },
  ];

  const handleClose = () => {
    setOpen(false);
    setBase64TextString("");
    setPic({});
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const displayedItems = myArray.filter((piece) => {
    return (
      piece.name.toLowerCase().includes(itemSearch.toLowerCase()) ||
      piece.brand.toLowerCase().includes(itemSearch.toLowerCase())
    );
  });

  const instance = (
    <div className="add">
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

  function handleLoading() {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  }

  function addItem() {
    const newGrail = {
      brand,
      name,
      grail_type,
      weather,
      occasion,
      color,
      link,
      image,
    };

    fetch("/grails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify(newGrail),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.id === undefined) {
          alert("Error");
        } else {
          setBrand("");
          setName("");
          setGrail_type("");
          setWeather("");
          setOccasion("");
          setColor("");
          setImage("");
          handleClose();
          myfetch();
          handleLoading();
        }
      });
  }

  function myfetch() {
    fetch("/myGrails", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((array) => setMyArray(array));
  }

  useEffect(() => {
    myfetch();
  }, []);

  function deleteItem(deletedItem) {
    const updatedShoes = myArray.filter((shoe) => shoe.id !== deletedItem.id);
    setMyArray(updatedShoes);
    fetch(`/grails/${deletedItem.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
    }).then((resp) => resp.json());
  }

  const content = (
    <div className="itemContainer">
      {instance}
      {displayedItems.map((item) => (
        <GrailCard item={item} key={item.id} handleClick={deleteItem} />
      ))}
      {displayedItems.length === 0 && <h3>uh oh....</h3>}
    </div>
  );

  function handleReaderLoaded(readerEvt) {
    let binaryString = readerEvt.target.result;
    setBase64TextString(btoa(binaryString));
    console.log("file to check:", base64TextString);
  }

  function onChange(e) {
    console.log("file to upload:", e.target.files[0]);
    let file = e.target.files[0];
    setPic(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = handleReaderLoaded.bind();
      reader.readAsBinaryString(file);
      setImage("data:image/png;base64," + base64TextString);
    }
  }

  function upload() {
    if (pic.name !== undefined) {
      const reader = new FileReader();
      reader.onload = handleReaderLoaded.bind();
      reader.readAsBinaryString(pic);
      setImage("data:image/png;base64," + base64TextString);
      alert("Upload successful");
    }
  }

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
      {loading === true ? <Loading /> : content}
      <Modal open={open} onClose={handleClose} size="xs">
        <Modal.Header>
          <Modal.Title>Add Grail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form fluid>
            <Form.Group controlId="select-10">
              <Form.ControlLabel>Image</Form.ControlLabel>
              <input
                type="file"
                id="file"
                name="image"
                accept="image/*"
                onChange={(e) => onChange(e)}
              />
              <Divider vertical />
              <Button appearance="primary" onClick={upload}>
                Upload
              </Button>
            </Form.Group>
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
              <Form.ControlLabel>Grail Type</Form.ControlLabel>
              <SelectPicker
                data={typeOptions}
                groupBy="style"
                onChange={(e) => setGrail_type(e)}
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
            <Form.Group controlId="name-8">
              <Form.ControlLabel>Link</Form.ControlLabel>
              <Form.Control
                name="brand"
                onChange={(e) => {
                  setLink(e);
                }}
              />
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

export default Grails;
