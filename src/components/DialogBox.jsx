import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import React from "react";

const DialogBox = (props) => {
    console.log(props.message)
    const [open, setOpen] = React.useState(props.open);
    console.log(props.open)
    const handleClose = () => {
        setOpen(false);
      };

  return (
    <Dialog
      open={props.message && open}
      onClose={handleClose}
      maxWidth="lg"
    >
      <DialogTitle>Message</DialogTitle> 
      <DialogContent style={{ overflow: "hidden", minWidth: "40vw" }}>
            {props.message}
      </DialogContent>
      <DialogActions
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "16px",
          borderTop: "solid 1px rgb(0,0,0,.1)",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleClose}
          >
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

DialogBox.defaultProps = {
  message: "",
  open:true
};

export default DialogBox;
