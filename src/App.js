
import {useState} from "react";
import './App.css';
import MyButton from './components/button';
import ShoppingList from './components/ShoppingList';

//data

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

function FilterableProductTable ({products}){
  // variable to be changed,state function to update the variable
  const [filterText,setFilterText]=useState('fruits')// what the user enters in the textbox
  const[inStockOnly,setInStockOnly]=useState(false)//output depending on the textboz input
  return(
    <div>
      <SearchBar filterText={filterText} inStockOnly={inStockOnly} onFilterTextChange={setFilterText} onInStockOnlyChange={setInStockOnly}//passing as properties
       />      
      <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly} />
    </div>   

  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}

function SearchBar({filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange
}){ 
  
  return(
    //render the user input,check box and the table
    <form>
      <input type="text" 
      value={filterText} placeholder="Search..." 
      onChange={(e) => onFilterTextChange(e.target.value)}//changes the value of the user
       />       
      <label>      
        <input type="checkbox" 
        checked={inStockOnly}  
        onChange={(e)=> onInStockOnlyChange(e.target.checked)
        }      
        />        
        {' '}
        <br/>
        Only show products in stock
      </label>
    </form>    
    
  );

}
function ProductRow({ item }) {
  const name = item.stocked ? item.name :
    <span style={{ color: 'red' }}>
      {item.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{item.price}</td>
    </tr>
  );
}

function ProductTable({products,filterText,inStockOnly}){
  const rows=[];//def a empty row
  let lastCategory = null; //def a end of list
  
  function IsMatach(){
    return {rows};
  }
  function NoMatch(){
    return 0;

    }
     
/* loop thru the product list and push each item into the empty row */
  products.forEach((item) => {
    
    if(
      item.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      )===-1
    ){
      return;
    }
    
  
    if (item.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={item.category}
          key={item.category} />
      );
      }
      rows.push(
        <ProductRow
          item={item}
          key={item.name} />
      );
      console.log(lastCategory)
      lastCategory = item.category;

    console.log(lastCategory)
    
   
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );

}

//root component

function App() {
  
//component property name={variablename}
  
  return (
    <>      
      <div className="App">
      <h1>SoftPauer</h1>  
       
       <FilterableProductTable products={PRODUCTS}/>  
       
      </div>
   
    
    </>
    
  );


}

export default App;
