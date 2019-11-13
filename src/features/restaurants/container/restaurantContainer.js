import React from "react";

import RestaurantHeader from "../components/restaurantHeader";
import RestaurantGallery from "../components/restaurantGallery";

const Restaurant = props => {
  return (
    <div className="container-fluid p-0">
      <RestaurantHeader />
      <RestaurantGallery
        Data={BreakfastData}
        Type={"Breakfast"}
        Time={"7:00 Am - 9:00 Am"}
      />
      <RestaurantGallery
        Data={LunchData}
        Type={"Lunch"}
        Time={"10:00 Am - 2:00 Pm"}
      />
      <RestaurantGallery
        Data={DinnerData}
        Type={"Dinner"}
        Time={"6:00 Pm - 10:00 Pm"}
      />
      <RestaurantGallery
        Data={DrinkData}
        Type={"Drinks"}
        Time={"11:00 Am - 11:00 Pm"}
      />
    </div>
  );
};
export default Restaurant;

const BreakfastData = [
  {
    id: 1,
    Name: "ROAST & VEGETABLES",
    Price: 300,
    desc:
      "Egg Beaters scrambled with slow-roasted tomatoes, onion, fresh spinach and mushrooms.",
    ImgUrl: "/images/restaurant/breakfast/restaurant-01.jpg"
  },
  {
    id: 2,
    Name: "ROAST & VEGETABLES",
    Price: 300,
    desc:
      "Egg Beaters scrambled with slow-roasted tomatoes, onion, fresh spinach and mushrooms.",
    ImgUrl: "/images/restaurant/breakfast/restaurant-03.jpg"
  },
  {
    id: 3,
    Name: "ROAST & VEGETABLES",
    Price: 300,
    desc:
      "Egg Beaters scrambled with slow-roasted tomatoes, onion, fresh spinach and mushrooms.",
    ImgUrl: "/images/restaurant/breakfast/restaurant-07.jpg"
  },
  {
    id: 4,
    Name: "ROAST & VEGETABLES",
    Price: 300,
    desc:
      "Egg Beaters scrambled with slow-roasted tomatoes, onion, fresh spinach and mushrooms.",
    ImgUrl: "/images/restaurant/breakfast/restaurant-08.jpg"
  },
  {
    id: 5,
    Name: "ROAST & VEGETABLES",
    Price: 300,
    desc:
      "Egg Beaters scrambled with slow-roasted tomatoes, onion, fresh spinach and mushrooms.",
    ImgUrl: "/images/restaurant/breakfast/restaurant-11.jpg"
  },
  {
    id: 6,
    Name: "ROAST & VEGETABLES",
    Price: 300,
    desc:
      "Egg Beaters scrambled with slow-roasted tomatoes, onion, fresh spinach and mushrooms.",
    ImgUrl: "/images/restaurant/breakfast/restaurant-18.jpg"
  }
];

const DinnerData = [
  {
    id: 7,
    Name: "ROAST & VEGETABLES",
    Price: 300,
    desc:
      "Egg Beaters scrambled with slow-roasted tomatoes, onion, fresh spinach and mushrooms.",
    ImgUrl: "/images/restaurant/dinner/dinner (3).jpg"
  },
  {
    id: 8,
    Name: "ROAST & VEGETABLES",
    Price: 300,
    desc:
      "Egg Beaters scrambled with slow-roasted tomatoes, onion, fresh spinach and mushrooms.",
    ImgUrl: "/images/restaurant/dinner/dinner (2).jpg"
  },
  {
    id: 9,
    Name: "ROAST & VEGETABLES",
    Price: 300,
    desc:
      "Egg Beaters scrambled with slow-roasted tomatoes, onion, fresh spinach and mushrooms.",
    ImgUrl: "/images/restaurant/dinner/dinner (4).jpg"
  },
  {
    id: 10,
    Name: "ROAST & VEGETABLES",
    Price: 300,
    desc:
      "Egg Beaters scrambled with slow-roasted tomatoes, onion, fresh spinach and mushrooms.",
    ImgUrl: "/images/restaurant/dinner/dinner (5).jpg"
  },
  {
    id: 11,
    Name: "ROAST & VEGETABLES",
    Price: 300,
    desc:
      "Egg Beaters scrambled with slow-roasted tomatoes, onion, fresh spinach and mushrooms.",
    ImgUrl: "/images/restaurant/dinner/dinner (1).jpg"
  },
  {
    id: 12,
    Name: "ROAST & VEGETABLES",
    Price: 300,
    desc:
      "Egg Beaters scrambled with slow-roasted tomatoes, onion, fresh spinach and mushrooms.",
    ImgUrl: "/images/restaurant/dinner/dinner (3).jpg"
  }
];

const DrinkData = [
  {
    id: 13,
    Name: "ROAST & VEGETABLES",
    Price: 300,
    desc:
      "Egg Beaters scrambled with slow-roasted tomatoes, onion, fresh spinach and mushrooms.",
    ImgUrl: "/images/restaurant/drink/drink (6).jpg"
  },
  {
    id: 14,
    Name: "ROAST & VEGETABLES",
    Price: 300,
    desc:
      "Egg Beaters scrambled with slow-roasted tomatoes, onion, fresh spinach and mushrooms.",
    ImgUrl: "/images/restaurant/drink/drink (1).jpg"
  },
  {
    id: 15,
    Name: "ROAST & VEGETABLES",
    Price: 300,
    desc:
      "Egg Beaters scrambled with slow-roasted tomatoes, onion, fresh spinach and mushrooms.",
    ImgUrl: "/images/restaurant/drink/drink (2).jpg"
  },
  {
    id: 16,
    Name: "ROAST & VEGETABLES",
    Price: 300,
    desc:
      "Egg Beaters scrambled with slow-roasted tomatoes, onion, fresh spinach and mushrooms.",
    ImgUrl: "/images/restaurant/drink/drink (3).jpg"
  },
  {
    id: 17,
    Name: "ROAST & VEGETABLES",
    Price: 300,
    desc:
      "Egg Beaters scrambled with slow-roasted tomatoes, onion, fresh spinach and mushrooms.",
    ImgUrl: "/images/restaurant/drink/drink (4).jpg"
  },
  {
    id: 18,
    Name: "ROAST & VEGETABLES",
    Price: 300,
    desc:
      "Egg Beaters scrambled with slow-roasted tomatoes, onion, fresh spinach and mushrooms.",
    ImgUrl: "/images/restaurant/drink/drink (5).jpg"
  }
];

const LunchData = [
  {
    id: 19,
    Name: "ROAST & VEGETABLES",
    Price: 300,
    desc:
      "Egg Beaters scrambled with slow-roasted tomatoes, onion, fresh spinach and mushrooms.",
    ImgUrl: "/images/restaurant/lunch/lunch (1).jpg"
  },
  {
    id: 20,
    Name: "ROAST & VEGETABLES",
    Price: 300,
    desc:
      "Egg Beaters scrambled with slow-roasted tomatoes, onion, fresh spinach and mushrooms.",
    ImgUrl: "/images/restaurant/lunch/lunch (2).jpg"
  },
  {
    id: 21,
    Name: "ROAST & VEGETABLES",
    Price: 300,
    desc:
      "Egg Beaters scrambled with slow-roasted tomatoes, onion, fresh spinach and mushrooms.",
    ImgUrl: "/images/restaurant/lunch/lunch (3).jpg"
  },
  {
    id: 22,
    Name: "ROAST & VEGETABLES",
    Price: 300,
    desc:
      "Egg Beaters scrambled with slow-roasted tomatoes, onion, fresh spinach and mushrooms.",
    ImgUrl: "/images/restaurant/lunch/lunch (4).jpg"
  },
  {
    id: 23,
    Name: "ROAST & VEGETABLES",
    Price: 300,
    desc:
      "Egg Beaters scrambled with slow-roasted tomatoes, onion, fresh spinach and mushrooms.",
    ImgUrl: "/images/restaurant/lunch/lunch (5).jpg"
  },
  {
    id: 24,
    Name: "ROAST & VEGETABLES",
    Price: 300,
    desc:
      "Egg Beaters scrambled with slow-roasted tomatoes, onion, fresh spinach and mushrooms.",
    ImgUrl: "/images/restaurant/lunch/lunch (6).jpg"
  }
];
