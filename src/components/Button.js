import React from "react";
import "../styles/Button.css";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

function Button(props) {
  let disabled = props.disabled ? true : false;
  let buttonText = props.buttonText ? props.buttonText : "Default";
  let variant = props.variant ? props.variant : false;
  let size = props.size ? props.size : null;
  let backgroundColor = props.color ? props.color : null;
  let color = props.color ? props.color : null;
  let startIcon = props.startIcon ? props.startIcon : false;
  let endIcon = props.endIcon ? props.endIcon : false;
  let border = null;

  if (size) {
    switch (size) {
      case "sm":
        size = "2rem";
        break;
      case "md":
        size = "2.5rem";
        break;
      case "lg":
        size = "3rem";
        break;
      default:
        break;
    }
  }

  if (color) {
    switch (color) {
      case "default":
        break;
      case "primary":
        backgroundColor = "#2962FF";
        color = "#ffffff";
        break;
      case "secondary":
        backgroundColor = "#455A64";
        color = "#ffffff";
        break;
      case "danger":
        backgroundColor = "#D32F2F";
        color = "#ffffff";
        break;
      default:
        break;
    }
  }

  if (variant === "outline") {
    color = "#2962FF";
    border = "0.1rem solid #2962FF";
    backgroundColor = "#ffffff";
  }

  if (variant === "text") {
    color = "#2962FF";
    backgroundColor = "#ffffff";
  }

  if (variant === "text" && disabled === true) {
    backgroundColor = "white";
    color = "gray";
  }

  let buttonStyle = {
    backgroundColor: backgroundColor,
    color: color,
    height: size,
    border: border,
  };

  return (
    <button style={buttonStyle} disabled={disabled}>
      {startIcon ? <AddShoppingCartIcon style={{ fontSize: 12 }} /> : null}{" "}
      {buttonText}{" "}
      {endIcon ? <AddShoppingCartIcon style={{ fontSize: 12 }} /> : null}
    </button>
  );
}

export default Button;
