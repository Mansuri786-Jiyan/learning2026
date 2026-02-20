export const Map7 = () => {

  const marvelCharacters = [
    {
      id: 1,
      name: "Iron Man",
      realName: "Tony Stark",
      power: "Genius Inventor",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmj7XKS8uvnPt814M6AlN4ANslfv0vdpjf-jjZKgaRRNND48TY"
    },
    {
      id: 2,
      name: "Spider-Man",
      realName: "Peter Parker",
      power: "Spider abilities",
      image: "https://www.youtube.com/watch?v=t06RUxPbp_c"
    },
    {
      id: 3,
      name: "Captain America",
      realName: "Steve Rogers",
      power: "Super Soldier",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/dc/CapShield05.jpg"
    },
    {
      id: 4,
      name: "Thor",
      realName: "Thor Odinson",
      power: "God of Thunder",
      image: "https://upload.wikimedia.org/wikipedia/en/4/4c/Thor_by_Olivier_Coipel.png"
    },
    {
      id: 5,
      name: "Black Panther",
      realName: "T'Challa",
      power: "Enhanced strength",
      image: "https://upload.wikimedia.org/wikipedia/en/9/9f/Black_Panther_OS_Vol_1_2.png"
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Marvel Characters</h2>

      <table border="1" cellPadding="10" cellSpacing="0" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Hero Name</th>
            <th>Real Name</th>
            <th>Power</th>
          </tr>
        </thead>

        <tbody>
          {marvelCharacters.map((hero) => (
            <tr key={hero.id}>
              <td>{hero.id}</td>

              <td>
                <img 
                  src={hero.image} 
                  alt={hero.name} 
                  width="80"
                  style={{ borderRadius: "8px" }}
                />
              </td>

              <td>{hero.name}</td>
              <td>{hero.realName}</td>
              <td>{hero.power}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
