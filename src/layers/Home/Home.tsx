import React from "react";
import markdownImage from "../../site/assets/markdown.png";
import clockImage from "../../site/assets/clock.png";
import calcImage from "../../site/assets/calc.png";
import quoteImage from "../../site/assets/quote.png";
import ppoWormImage from "../../site/assets/ppo-worm.gif";
import ppoBipedalWalker from "../../site/assets/ppo-bipedal-walker.gif";
import minimaxCheckers from "../../site/assets/minimax-checkers.png";
import termsprint from "../../site/assets/termsprint.png";
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
    if (navigateTo.includes("https://")) {
      window.open(navigateTo);
      return;
    }
    navigate(navigateTo);
  };

  return (
    <div className="cursor-pointer w-80 bg-black" onClick={handleClick}>
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
      <div className="flex justify-center items-center my-8">
        <div className="grid grid-cols-1 gap-4 m-auto md:grid-cols-2">
          <Card
            title="PPO Agent playing Worm"
            image={ppoWormImage}
            imageAlt="PPO Worm"
            navigateTo="https://huggingface.co/chirbard/ppo-Worm"
          />
          <Card
            title="PPO Agent playing BipedalWalker-v3"
            image={ppoBipedalWalker}
            imageAlt="PPO BipedalWalker"
            navigateTo="https://huggingface.co/chirbard/ppo-BipedalWalker-v3"
          />
          <Card
            title="Minimax Checkers Algorithm"
            image={minimaxCheckers}
            imageAlt="Minimax Checkers"
            navigateTo="https://github.com/chirbard/checkers-minimax-algorithm"
          />
          <Card
            title="Termsprint"
            image={termsprint}
            imageAlt="Termsprint"
            navigateTo="https://github.com/chirbard/Terms-Assistant"
          />
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
