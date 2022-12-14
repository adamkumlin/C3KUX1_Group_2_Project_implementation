import earthIcon from "../images/earth-icon.svg";
// Importerar en bild.

function Title() {
// Skapar en komponent

  return (
    <div className="Title">
        <img src={earthIcon}/>
        <h2>KLIMATUTMANINGEN</h2>
    </div>
  );
}
// Placerar en bild och ett h2-element.

export default Title;
// Exporterar komponenten som "Title".