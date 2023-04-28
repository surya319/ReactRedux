import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const profileData = useSelector((state) => state.codeSlice.value);
 
  return (
    <div>
      <h4>Name:{profileData.name}</h4>
      <h4>Age:{profileData.age}</h4>
      <h4>Email:{profileData.email}</h4>
    </div>
  );
}
