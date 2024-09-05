import React from "react";
import markdownImage from "../../site/assets/markdown.png";
import clockImage from "../../site/assets/clock.png";
import calcImage from "../../site/assets/calc.png";
import quoteImage from "../../site/assets/quote.png";
import { useNavigate } from "react-router-dom";

interface CardProps {
  title: string;
  image: string;
  imageAlt: string;
  navigateTo: string;
}

const Card: React.FC<CardProps> = ({ title, image, imageAlt, navigateTo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(navigateTo);
  };

  return (
    <div className="w-80 bg-black" onClick={handleClick}>
      <div className="bg-[#ffffff] block -translate-x-1 -translate-y-1 border-2 border-black hover:-translate-y-1.5 active:translate-x-0 active:translate-y-0 transition-all">
        <img src={image} alt={imageAlt} className="w-80" />
        <h2 className="m-2 font-medium">{title}</h2>
      </div>
    </div>
  );
};

class Home extends React.Component {
  render() {
    return (
      <div className="flex justify-center items-center mt-8">
        <div className="grid grid-cols-2 gap-4 m-auto">
          <Card
            title="FreeCodeCamp Clock"
            image={clockImage}
            imageAlt="Clock"
            navigateTo="/clock"
          />
          <Card
            title="FreeCodeCamp Markdown"
            image={markdownImage}
            imageAlt="Markdown"
            navigateTo="/markdown"
          />
          <Card
            title="FreeCodeCamp Calculator"
            image={calcImage}
            imageAlt="Calculator"
            navigateTo="/calculator"
          />
          <Card
            title="FreeCodeCamp Quotes"
            image={quoteImage}
            imageAlt="Quotes"
            navigateTo="/quotes"
          />
        </div>
      </div>
    );
  }
}

export default Home;
