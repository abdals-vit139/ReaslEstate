import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const Modal = ({
  open,
  handleClose,
  selectedOption,
  handleSubmit,
  date,
  setDate,
  price,
  setPrice,
  propertyType,
  setPropertyType,
  papersAvailable,
  setPapersAvailable,
  sqft,
  setSqft,
  rooms,
  setRooms,
  deposit,
  setDeposit,
  maintenance,
  setMaintenance,
}) => {
  const handlePriceChange = (e) => {
    const value = e.target.value;
    if (value >= 0 || value === "") {
      setPrice(value);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{selectedOption} Details</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {selectedOption === "Sale" && (
            <>
              <div>
                <TextField
                  label="Property Type"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  required
                  fullWidth
                />
              </div>
              <div>
                <TextField
                  label="Asking Price"
                  type="number"
                  value={price}
                  onChange={handlePriceChange}
                  required
                  fullWidth
                  InputProps={{
                    inputProps: { min: 0 },
                  }}
                />
              </div>

              <div>
                <TextField
                  label="Square Footage"
                  type="number"
                  value={sqft}
                  onChange={(e) => setSqft(e.target.value)}
                  required
                  fullWidth
                  InputProps={{
                    inputProps: { min: 0 },
                  }}
                />
              </div>
              <div>
                <TextField
                  label="Number of Rooms"
                  type="number"
                  value={rooms}
                  onChange={(e) => setRooms(e.target.value)}
                  required
                  fullWidth
                  InputProps={{
                    inputProps: { min: 0 },
                  }}
                />
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={papersAvailable}
                      onChange={(e) => setPapersAvailable(e.target.checked)}
                      color="primary"
                    />
                  }
                  label="All Papers Available"
                />
              </div>
            </>
          )}

          {selectedOption === "Rent" && (
            <>
              <div>
                <TextField
                  label="Rent Amount"
                  type="number"
                  value={price}
                  onChange={handlePriceChange}
                  required
                  fullWidth
                  InputProps={{
                    inputProps: { min: 0 },
                  }}
                />
              </div>
              <div>
                <TextField
                  label="Deposit"
                  type="number"
                  value={deposit}
                  onChange={(e) => setDeposit(e.target.value)}
                  required
                  fullWidth
                  InputProps={{
                    inputProps: { min: 0 },
                  }}
                />
              </div>
              <div>
                <TextField
                  label="Maintenance Fee"
                  type="number"
                  value={maintenance}
                  onChange={(e) => setMaintenance(e.target.value)}
                  required
                  fullWidth
                  InputProps={{
                    inputProps: { min: 0 },
                  }}
                />
              </div>
              <div>
                <TextField
                  label="Available From"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
            </>
          )}

          {selectedOption === "Lease" && (
            <>
              <div>
                <TextField
                  label="Rent Amount"
                  type="number"
                  value={price}
                  onChange={handlePriceChange}
                  required
                  fullWidth
                  InputProps={{
                    inputProps: { min: 0 },
                  }}
                />
              </div>
              <div>
                <TextField
                  label="Deposit"
                  type="number"
                  value={deposit}
                  onChange={(e) => setDeposit(e.target.value)}
                  required
                  fullWidth
                  InputProps={{
                    inputProps: { min: 0 },
                  }}
                />
              </div>
              <div>
                <TextField
                  label="Available From"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
            </>
          )}
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
