export default function Card (props){

    return (
    <>
        <div className="img-div">
            <img src={props.data.image.url} alt="" />
            <ul className="appearance">
                <h3>Appearance</h3>
                <li>Eye Color: {props.data.appearance["eye-color"]}</li>
                <li>Gender: {props.data.appearance.gender}</li>
                <li>Hair Color: {props.data.appearance["hair-color"]}</li>
                <li>Height: {props.data.appearance.height[0]} / {props.data.appearance.height[1]}</li>
                <li>Race: {props.data.appearance.race}</li>
                <li>Weight: {props.data.appearance.weight[0]} / {props.data.appearance.weight[1]}</li>
            </ul>
      </div>
      <div className="biography">
          <ul>
            <h3>Biography</h3>
                <li>Alignment: {props.data.biography.alignment}</li>
                <li>Alter Egos: {props.data.biography["alter-egos"]}</li>
                <li>Fill Name: {props.data.biography["full-name"]}</li>
                <li>Place of Birth: {props.data.biography["place-of-birth"]}</li>
                <li>Publisher: {props.data.biography.publisher}</li>
            </ul>
        </div>
        <div className="PowerStats">
            <ul>
              <h3>PowerStats</h3>
                <li>Combat {props.data.powerstats.combat}</li>
                <li>Intelligence: {props.data.powerstats.intelligence}</li>
                <li>Power: {props.data.powerstats.power}</li>
                <li>Speed: {props.data.powerstats.speed}</li>
                <li>Strength: {props.data.powerstats.strength}</li>
            </ul>
        </div>
        <div className="connection">
           <ul>
            <h3>Connection</h3>
            <li>Group Affiliation: {props.data.connections["group-affiliation"]}</li>
            <li>Relatives: {props.data.connections.relatives}</li>
            </ul>
        </div>
    </>
    )
}