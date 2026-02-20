export const Map6 = () => {
  const ridingBikes = [
    {
      id: 1,
      name: "Royal Enfield Classic 350",
      brand: "Royal Enfield",
      type: "Cruiser",
      engine: "349cc",
      mileage: "35 km/l",
      price: 193000,
      image: "classic350.jpg"
    },
    {
      id: 2,
      name: "Yamaha R15 V4",
      brand: "Yamaha",
      type: "Sports",
      engine: "155cc",
      mileage: "45 km/l",
      price: 182000,
      image: "r15v4.jpg"
    },
    {
      id: 3,
      name: "KTM Duke 200",
      brand: "KTM",
      type: "Street",
      engine: "199cc",
      mileage: "35 km/l",
      price: 196000,
      image: "duke200.jpg"
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Riding Bikes</h2>

      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Bike</th>
            <th>Brand</th>
            <th>Type</th>
            <th>Engine</th>
            <th>Mileage</th>
            <th>Price (₹)</th>
          </tr>
        </thead>

        <tbody>
          {ridingBikes.map((bike) => (
            <tr key={bike.id}>
              <td>{bike.id}</td>
              <td>{bike.name}</td>
              <td>{bike.brand}</td>
              <td>{bike.type}</td>
              <td>{bike.engine}</td>
              <td>{bike.mileage}</td>
              <td>{bike.price.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
