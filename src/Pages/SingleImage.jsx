import React, { useEffect, useState } from "react";
import PageTitle from "../components/shared/PageTitle";
import { useParams } from "react-router";

const SingleImage = () => {
  const { id } = useParams();
  const [image, setImage] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/image/single/${id}`)
      .then((res) => res.json())
      .then((data) => setImage(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(image);

  return (
    <div>
      <PageTitle>{image?.prompt}</PageTitle>
      <div className="w-11/12 mx-auto">
        <figure className="my-5 p-1 flex justify-center">
          <img src={image.original_img} alt="" className="rounded-md" />
        </figure>
      </div>
    </div>
  );
};

export default SingleImage;
