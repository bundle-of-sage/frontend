import React from "react";
import BlackSpinner from "../../assets/images/blackSpinner.svg";
import WhiteSpinner from "../../assets/images/whiteSpinner.svg";

export default function Spinner({ isLoading, size, color }) {
  return isLoading ? (
    <img
      src={color === "white" ? WhiteSpinner : BlackSpinner}
      alt="loading spinner"
      style={{ width: size, height: "auto" }}
    />
  ) : null;
}
