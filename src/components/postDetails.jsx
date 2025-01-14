import React from "react";
import { Carousel } from "react-bootstrap";

function PostDetails({ post }) {
  return (
    <div className="container">
      <div className="row" style={{ margin: "20px 20px 20px 0" }}>
        <div className="col-7">
          <Carousel>
            {post.images &&
              post.images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    src={image}
                    alt={`No: ${index}`}
                    className="d-block w-100"
                  />
                </Carousel.Item>
              ))}
          </Carousel>
        </div>
        <div className="col-5">
          <h2>{post.name}</h2>
          <p>{post.location}</p>
          <p>By {post.username}</p>
          <p>{post.caption}</p>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
