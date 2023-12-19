import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  header {
    text-align: center;
    margin-bottom: 3rem;
    .btn {
      margin-bottom: 1rem;
    }
  }
  .img {
    border-radius: var(--borderRadius);
  }
  .plant-img {
    width: 100%;
    max-height: 250px;
    object-fit: cover;
  }
  .drink-info {
    padding-top: 2rem;
  }
  .plant-info ul {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .plant-info li {
    text-transform: lowercase;
  }
  .description {
    display: block;
    font-weight: 700;
    line-height: 1.5;
    margin-top: 2rem;
  }
  .drink p {
    font-weight: 700;
    text-transform: capitalize;
    line-height: 2;
    margin-bottom: 1rem;
  }
  .drink-data {
    margin-right: 0.5rem;
    background: none;
    padding: 0.25rem 0.5rem;
    border-radius: var(--borderRadius);
    color: var(--plant-green);
    border: 2px solid var(--plant-green);
    letter-spacing: var(--letterSpacing);
  }
  .ing {
    display: inline-block;
    margin-right: 0.5rem;
  }
  .newsletter-callout {
    padding: 2rem;
    margin-top: 3rem;
    background: #ffffff;
  }
  @media (min-width: 768px) {
    .newsletter-callout {
      background-image: url("/src/assets/pexels-element-digital-1470171.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: bottom -160px right 0;
    }
  }
  @media (min-width: 992px) {
    .drink {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 3rem;
      align-items: center;
    }
    .drink-info {
      padding-top: 0;
    }
    .plant-img {
      max-height: 100%;
    }
    .newsletter-callout {
      padding: 5rem 10rem;
      margin-top: 5rem;
    }
  }
`;

export default Wrapper;
