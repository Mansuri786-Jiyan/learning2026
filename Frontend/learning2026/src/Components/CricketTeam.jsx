import { Link } from 'react-router-dom';
import '../App.css'
export const CricketTeam = () =>{
 const Teams = [
  {
    teamId: 1,
    team: "Chennai Super Kings",
    image: "https://static.vecteezy.com/system/resources/thumbnails/019/991/853/original/chennai-super-kings-cricket-team-seamless-looping-flag-waving-background-indian-premier-league-looped-cloth-texture-slow-motion-3d-rendering-free-video.jpg",
    description: "CSK is one of the most successful IPL teams led by MS Dhoni."
  },
  {
    teamId: 2,
    team: "Mumbai Indians",
    image: "https://tse1.mm.bing.net/th/id/OIP.I4J2tbscJwV5UC5OwNxzmgHaEZ?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Mumbai Indians are known for their strong squad and multiple titles."
  },
  {
    teamId: 3,
    team: "Royal Challengers Bangalore",
    image: "",
    description: "RCB is famous for star players and aggressive batting."
  },
  {
    teamId: 4,
    team: "Kolkata Knight Riders",
    image: "",
    description: "KKR has won IPL titles and has a strong fan base."
  },
  {
    teamId: 5,
    team: "Rajasthan Royals",
    image: "",
    description: "RR focuses on young talent and smart strategies."
  },
  {
    teamId: 6,
    team: "Delhi Capitals",
    image: "",
    description: "DC is known for its energetic young players."
  },
  {
    teamId: 7,
    team: "Sunrisers Hyderabad",
    image: "",
    description: "SRH is famous for its strong bowling attack."
  },
  {
    teamId: 8,
    team: "Punjab Kings",
    image: "",
    description: "PBKS plays aggressive cricket with powerful hitters."
  },
  {
    teamId: 9,
    team: "Gujarat Titans",
    image: "",
    description: "GT quickly became one of the strongest IPL teams."
  },
  {
    teamId: 10,
    team: "Lucknow Super Giants",
    image: "",
    description: "LSG is a new team with consistent performances."
  }
];



    return (
        
        <>
     <div className="card-container">
      {Teams.map(team => {
        return <div className="card" key={team.teamId}>
         <Link to={`/SingleTeam/${team.team.replaceAll(" ", "-")}`}>
          <img src={team.image} alt={team.team} />
          <div className="card-content">
            <h3>{team.team}</h3>
            <p>{team.description}</p>
          </div>
         </Link>
        </div>
      }
        
      )}
    </div>

        </>
    )
}