import { React, useState } from "react";
import { Button, Divider, Form, Modal, SelectPicker, Panel, Toggle } from "rsuite";
import {MdOutlineLocalLaundryService} from 'react-icons/md'

function ItemCard({item}) {
  const [open, setOpen] = useState(false);
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
    textarea: "",
  });

  

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className = "itemCard" >
      <Panel
        shaded
        // bordered
        bodyFill
        style={{ display: "inline-block", width: 240 }}
      >
        <img   src= {item.image} height="240"  />
        <Panel header={item.brand}  className="rs-theme-dark">
            <p>{item.name}</p>
        <MdOutlineLocalLaundryService />
        <Toggle size="sm" checkedChildren="DIRTY" unCheckedChildren="CLEAN" />
        <br/>
        <Button appearance="primary">Remove</Button>
        <Divider vertical className="rs-theme-light" />
        <Button onClick={handleOpen} appearance="primary">
          Change
        </Button>
        </Panel>
      </Panel>
      <Modal open={open} onClose={handleClose} size="xs">
        <Modal.Header>
          <Modal.Title>Edit Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form fluid onChange={setFormValue} formValue={formValue}>
            <Form.Group controlId="name-9">
              <Form.ControlLabel>Name</Form.ControlLabel>
              <Form.Control name="name" />
            </Form.Group>
            <Form.Group controlId="select-10">
              <Form.ControlLabel>Item Type</Form.ControlLabel>
              <SelectPicker />
            </Form.Group>
            <Form.Group controlId="select-10">
              <Form.ControlLabel>Weather</Form.ControlLabel>
              <SelectPicker />
            </Form.Group>
            <Form.Group controlId="select-10">
              <Form.ControlLabel>Occasion</Form.ControlLabel>
              <SelectPicker />
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

export default ItemCard;
