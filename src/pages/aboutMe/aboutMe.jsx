import React from "react";
import "./about.css"
import { logo } from "../../assets/assets";
import { Card } from "antd";

const AboutMe = () => {
  return (
    <div className="about">
        <Card>
            <h1>About US</h1>
      <img src={logo}></img>
      <div className="bruh">
      <p style={{ textAlign: "justify" }}>
        About Hatoshop: Your Ultimate Hobby Wonderland
      </p>
      <p style={{ textAlign: "justify" }}>
        Welcome to Hatoshop, the ultimate destination for hobby enthusiasts
        seeking a world of excitement and collectibles! Our one-of-a-kind store
        caters to passionate fans of various genres, with a primary focus on
        Gundam, idols, and much more. Step into our realm and immerse yourself
        in a world of endless possibilities.
      </p>
      <p style={{ textAlign: "justify" }}>
        At Hatoshop, we understand the fervor and dedication that hobbyists
        bring to their passions. With our carefully curated selection of
        merchandise, we strive to ignite your imagination and elevate your hobby
        experience to new heights. Whether you're an ardent Gundam model builder
        or an idol aficionado, our diverse range of products is sure to
        captivate you.
      </p>
      <p style={{ textAlign: "justify" }}>
        Gundam enthusiasts will find themselves in paradise, as we offer an
        extensive array of Gundam model kits, ranging from classic favorites to
        the latest releases. Immerse yourself in the art of constructing these
        iconic mecha, fueling your creativity and bringing your favorite mobile
        suits to life. Our knowledgeable staff is always on hand to provide
        guidance, tips, and tricks to help you craft your masterpiece.
      </p>
      <p style={{ textAlign: "justify" }}>
        But that's not all—we embrace the vibrant world of idols too! Discover a
        treasure trove of merchandise from your beloved idol groups, including
        CDs, official merchandise, collectible cards, and more. Dive into the
        world of music and fandom, celebrating the talents and charisma of your
        favorite idols.
      </p>
      <p style={{ textAlign: "justify" }}>
        At Hatoshop, we prioritize quality, authenticity, and variety. Our
        products come directly from trusted manufacturers and official
        distributors, ensuring that you receive genuine and top-notch items. We
        constantly update our inventory to showcase the latest releases and
        limited-edition collectibles, guaranteeing that you'll always find
        something new and exciting to add to your collection.
      </p>
      <p style={{ textAlign: "justify" }}>
        Beyond our exceptional merchandise, Hatoshop is a community hub where
        like-minded enthusiasts can connect, share their experiences, and bond
        over their common interests. Join us for special events, workshops, and
        gatherings that celebrate the spirit of hobbies and fandom. Discover a
        place where friendships flourish and passion thrives.
      </p>
      <p style={{ textAlign: "justify" }}>
        Whether you're a seasoned collector or a novice exploring the world of
        hobbies, Hatoshop welcomes you with open arms. Step into our store and
        let your imagination soar as you embark on a thrilling journey through
        the realms of Gundam, idols, and much more. Your ultimate hobby
        wonderland awaits at Hatoshop—where dreams come to life.
      </p>
      </div>
      </Card>
    </div>
  );
};

export default AboutMe;
