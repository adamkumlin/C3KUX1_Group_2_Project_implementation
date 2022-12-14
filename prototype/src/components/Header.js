import earthIcon from "../images/earth-icon.svg";
// Importerar en bild.

function Header() {
// Skapar en komponent.

  return (
    <div className="Header">
      <img src={earthIcon}/>

      <h2>KLIMATUTMANINGEN</h2>
  </div>
  );
}
// Placerar en bild och ett h2-element.

export default Header;
// Exporterar komponenten som "Header".