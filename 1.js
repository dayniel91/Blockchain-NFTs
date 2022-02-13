// web/pages/api/erc721/[id].js

const metadata = {
    1: {
      attributes: [
        {
          trait_types: "Shape",
          value: "Circle",
        },
        {
          trait_types: "Mood",
          value: "Sad", 
        },
      ],
      description: " A sad circle.",
      image: "https://i.imgur.com/Qkw9N0A.jpeg",
      name: " Sad Circle",
    },
    2: {
      attrbutes: [
         {
          trait_types: "Shape",
          value: "Rectangle",
         },
         {
           trait_types: "Mood",
           value: "Angry",
         },
        ],
        description: " An angry rectangle.",
        image: "https://i.imgur.com/SMnne06k.jpeg",
        name: "Angry Rectangle",
    },
    3: {
      attrbutes: [
         {
           trait_types: "Shape", 
           value: "Triangle",
         },
         {
          trait_types: "Mood", 
          value: "Bored", 
         },
      ],
      description: "An bored triangle.",
      image: "https://i.imgur.com/hMVRFoJ.jpeg",
      name: "Bored Triangle",
  
    },
  };
  
  export default function handler(req, res) {
      res.status(200).json(metadata[req.query.id] || { description: "An Bored Triangle."});
    }