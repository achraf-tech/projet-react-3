import { useEffect, useState } from "react";
import "./portfolio.scss";
import images from "./data";
import styled from "styled-components";

const ImageContainer = styled.div`
  background: lime;
  width: 100vw;
  display: grid;
  grid-template-columns: auto auto auto;
  height: auto;
  padding: 0;
`;
const Tags = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 400px;
  padding: 0;
`;
const ImageCard = styled.div`
  position: relative;

  z-index: 100;

  margin: 25px;

  border-radius: 5px;

  padding: 0px;

  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 3px 2px;
`;

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data] = useState([]);
  const [tag, setTag] = useState("portfolio");
  const [filterimg, setFilterimg] = useState([]);
  const TagButton = ({ name, handleSetTag, tagActive }) => {
    return (
      <button
        id="filterBtn"
        className={`tag ${tagActive ? "active" : null}`}
        onClick={() => handleSetTag(name)}
      >
        {name.toUpperCase()}
      </button>
    );
  };

  /*const list = [
    {
      id: "featured",
      title: "Portfolio",
    },

    {
      id: "web",
      title: "amazon App",
    },
    {
      id: "mobile",
      title: "Mobile App React Native",
    },

    {
      id: "backend",
      title: "Backend",
    },
    {
      id: "Styled components",
      title: "Styled components",
    },
  ];
*/
  useEffect(() => {
    tag === "portfolio"
      ? setFilterimg(images)
      : setFilterimg(images.filter((image) => image.tag.includes(tag)));
  }, [tag]);

  return (
    <div className="portfolio" id="portfolio">
      <h1 id="portfolioTitle">Portfolio</h1>
      <Tags>
        <TagButton
          name="React"
          tagActive={tag === "React" ? true : false}
          handleSetTag={setTag}
        />
        <TagButton
          name="amazon"
          tagActive={tag === "amazon" ? true : false}
          handleSetTag={setTag}
        />
        <TagButton
          name="styledComponents"
          tagActive={tag === "styledComponents" ? true : false}
          handleSetTag={setTag}
        />
        <TagButton
          name="reactNative"
          tagActive={tag === "reactNative" ? true : false}
          handleSetTag={setTag}
        />
      </Tags>

      <div className="PFcontainer">
        {filterimg.map((image) => (
          <>
            <ImageContainer>
              <ImageCard key={image.id} className="imageCard">
                <a className="imageatag" href={`/images/${image.imageName}`}>
                  <img
                    className="image"
                    src={`/images/${image.imageName}`}
                    alt=""
                  />
                  <div class="overlay">
                    <div class="text">link</div>
                  </div>
                </a>
              </ImageCard>
            </ImageContainer>
          </>
        ))}
      </div>

      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
