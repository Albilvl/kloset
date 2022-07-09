import { React, useState } from "react";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import {
  Button,
  Divider,
  Form,
  Modal,
  Panel,
  SelectPicker,
  Toggle,
} from "rsuite";

function ItemCard({ item, handleClick }) {
  const [open, setOpen] = useState(false);
  const [updatedClean, setUpdatedClean] = useState(!item.dirty);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  function handleLaundry() {
    fetch(`/laundry/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify({
        dirty: updatedClean,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((item) => {
          setUpdatedClean(!item.dirty);
        });
      } else {
        r.json().then((e) => alert(e.errors));
      }
    });
  }

  return (
    <div className="itemCard">
      <Panel shaded bodyFill style={{ display: "inline-block", width: 240 }}>
        <img src={item.image} height="240" />
        <Panel header={item.brand} className="rs-theme-dark">
          <p>{item.name}</p>
          {item.dirty !== undefined ? (
            <>
              <MdOutlineLocalLaundryService />
              <Toggle
                size="sm"
                checkedChildren="DIRTY"
                unCheckedChildren="CLEAN"
                onClick={handleLaundry}
              />
            </>
          ) : (
            " "
          )}
          <br />
          <Button
            appearance="primary"
            onClick={() => {
              handleClick(item);
            }}
          >
            Remove
          </Button>
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
          <Form fluid>
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
