import { React, useState } from "react";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { Button, Panel } from "rsuite";

function WashCard({ item, setMyArray, myArray }) {
  const [updatedClean, setUpdatedClean] = useState(!item.dirty);

  function handleLaundry(deletedItem) {
    const updatedShoes = myArray.filter((shoe) => shoe.id !== deletedItem.id);
    setMyArray(updatedShoes);
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
          <MdOutlineLocalLaundryService />
          <br />
          <Button
            appearance="primary"
            onClick={() => {
              handleLaundry(item);
            }}
          >
            Washed
          </Button>
        </Panel>
      </Panel>
    </div>
  );
}

export default WashCard;
