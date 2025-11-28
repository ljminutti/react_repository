
const drinkList = {
    tea: {
        name: "Tea",
        type: "Hot",
        caffeineContent: "30-60 mg per cup"
    },
    coffee: {
        name: "Coffee",
        type: "Hot",
        caffeineContent: "95 mg per cup"
    },
    soda: {
        name: "Soda",
        type: "Cold",
        caffeineContent: "40 mg per can"
    }
};


function Drinks({ drink }) {

  let info = drinkList[drink];
  return (
    <li>
      <h2>{info.name}</h2>
      <p>Type: {info.type}</p>
      <p>Caffeine Content: {info.caffeineContent}</p>
    </li>
  );
}

/*
function Drinks() {
  return (
    <div> 
        <h1>Drinks Component</h1>
        <ul>
            <li>
                <h2>{drinks.tea.name}</h2>
                <p>Type: {drinks.tea.type}</p>
                <p>Caffeine Content: {drinks.tea.caffeineContent}</p>
            </li>
        </ul>
    </div>
  );
}
*/
export default Drinks;