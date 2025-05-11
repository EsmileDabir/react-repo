const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
         <img 
        src="images\airjordan.png" 
        style={{ width: "140px", height: "auto" }}  // Larger logo
        alt="Nike" 
  />
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>

      <button>login</button>
    </nav>
  );
};

export default Navigation;
