import Image from "next/image";
import React from "react";

const Project_Card = ({ image }) => {
  return (
    <div>
      <Image src={image} height={300} width={300} alt="project" />
    </div>
  );
};

export default Project_Card;
