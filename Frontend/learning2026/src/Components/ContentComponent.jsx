import "../assets/Content.css"
const ContentComponent = () =>{
  const bikes = [
  {
    id: 1,
    name: "Royal Enfield Classic 350",
    image: "https://wallpapercat.com/w/middle-retina/b/6/c/1812232-1920x1080-desktop-1080p-indian-bike-background-image.jpg",
    engine: "349cc",
    power: "20.2 HP",
    mileage: "35–40 km/l",
    price: "₹1.9 – ₹2.3 Lakhs",
    features: [
      "Retro premium design",
      "Dual-channel ABS",
      "Long ride comfort",
      "Strong metal body"
    ]
  },
  {
    id: 2,
    name: "Harley-Davidson X440 Launched In India At",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCm3wvdvDlvtIBdWF7LhvBHZ2n09INW_o3EA&s",
    engine: "373cc",
    power: "43 HP",
    mileage: "28–32 km/l",
    price: "₹3.1 Lakhs",
    features: [
      "Aggressive sporty design",
      "Quick shifter",
      "LED headlights",
      "Lightweight frame"
    ]
  },
  {
    id: 3,
    name: "Mountain Bike",
    image: "https://images-cdn.ubuy.co.in/6470c2b219484d667a0ee367-30.jpg",
    engine: "155cc",
    power: "18.4 HP",
    mileage: "45–50 km/l",
    price: "₹1.8 Lakhs",
    features: [
      "Racing inspired look",
      "Traction control",
      "Digital display",
      "Excellent mileage"
    ]
  }
];


 
 return (
  <div>
    {bikes.map((bike) => (
      <div className="main" key={bike.id}>
        <div>
          <img src={bike.image} alt={bike.name} />
        </div>

        <div className="bike-info">
          <h1>{bike.name}</h1>
          <p>
            {bike.engine} • {bike.power} • {bike.mileage}
          </p>

          <ul>
            {bike.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <h3>{bike.price}</h3>
        </div>
      </div>
    ))}
  </div>
);

}

export default ContentComponent;