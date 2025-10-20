import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";
import { Item } from "./App";

function AddItem(props) {
  const [ open, setOpen ] = useState(false);
  const [ item, setItem ] = useState<Item>({
    product: '',
    amount: '',
  });

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return(
    <>
      <Button onClick={handleOpen}>
        Add Item
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Item</DialogTitle>
        <DialogContent>
          <TextField value={item.product} margin="dense"
            onChange={e => setItem({...item, product: e.target.value})}
            label="Product/제품명" fullWidth />
          <TextField value={item.amount} margin="dense"
            onChange={e => setItem({...item, amount: e.target.value})}
            label="Amount/수량" fullWidth
          />
        </DialogContent>
        <Button onClick={handleClose}>
          Cancel / 취소
        </Button>
        <Button onClick={addItem}>
          Add / 저장
        </Button>
      </Dialog>
    </>
  );
}

export default AddItem