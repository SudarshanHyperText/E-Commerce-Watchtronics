import React from "react";
import styled from "styled-components";
import PageHero from "../components/PageHero/PageHero";

const About = () => {
  return (
    <Wrapper>
      <div className="about-page">
        <PageHero title="about" />
        <div className="about-container">
          <img
            src="https://th.bing.com/th/id/OIP._Zh8lqWC2IXqLZY8beShqgHaE5?w=263&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
            alt="watch"
          />
          <div className="text">
            <h2> Worlds first creator</h2>
            <hr />
            <p>
              {" "}
              Rolex is a British-founded Swiss watch designer and manufacturer
              based in Geneva, Switzerland. Founded in 1905 as Wilsdorf and
              Davis by Hans Wilsdorf and Alfred Davis in London, England, the
              company registered the word Rolex as the brand name of its watches
              in 1908, and it became Rolex Watch Co. Ltd. in 1915. After World
              War I, the company moved its base of operations to Geneva because
              of the unfavorable economy in the United Kingdom. In 1920, Hans
              Wilsdorf registered Montres Rolex SA in Geneva as the new company
              name (montre is French for a watch (timepiece)); it later became
              Rolex SA. Since 1960, the company has been owned by the Hans
              Wilsdorf Foundation, a private family trust
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`
  .about-page {
    margin-top: 7rem;
    min-height: calc(100vh - 12rem);
  }
  .about-container {
    text-align: center;
  }
  img {
    margin: 4rem 0rem;
  }
  .text {
    padding: 1rem;
  }

  @media only screen and (min-width: 900px) {
    .about-container {
      width: 80vw;
      display: grid;
      grid-template-columns: 600px 500px;
      align-items: center;
      justify-content: space-around;
      margin: auto;
    }
    img {
      width: 90%;
    }
  }
`;
