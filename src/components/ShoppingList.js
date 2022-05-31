const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];

function ShoppingList(){

    const prod_list=products.map(item =>
        <li key={item.id}
        style={{
            color: item.isFruit ? 'magenta' : 'Yellow'
          }}



        >{item.title}</li>




    )



    return(
        <>
        <h1> softpauer</h1>
        <ul>{prod_list}</ul>
        </>
        

    );
}

export default ShoppingList;
