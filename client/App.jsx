import { useState,useEffect } from 'react'
import axios from 'axios'
import './styles.css'
import Student from './Student'

function App() {
  // const [formData, setFormData] = useState({ name: '', description: '',price:0});
  // const [items, setItems] = useState([]);

  // // Fetch items from backend
  // useEffect(() => {
  //   axios.get('http://localhost:4000/api/items')
  //     .then(response => setItems(response.data))
  //     .catch(error => console.error('Error fetching items:', error));
  // }, []);

  // // Handle form submission
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('http://localhost:4000/api/items', formData);
  //     setItems([...items, response.data]); // Add new item to the list
  //     setFormData({ name: '', description: '' ,price:0}); // Reset form
  //   } catch (error) {
  //     console.error('Error adding item:', error);
  //   }
  // };

  // // Handle input changes
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // return (
  //   <div className="App">
  //     <h1>React Form with Express and Mongoose</h1>
      
  //     <form onSubmit={handleSubmit} className='form-container'>
  //       <input
  //         type="text"
  //         name="name"
  //         placeholder="Name"
  //         value={formData.name}
  //         onChange={handleChange}
  //         required
  //       />
  //       <br />
  //       <input
  //         type="text"
  //         name="price"
  //         placeholder="Price"
  //         value={formData.price}
  //         onChange={handleChange}
  //         required
  //       />
  //       <br />
  //       <textarea
  //         name="description"
  //         placeholder="Description"
  //         value={formData.description}
  //         onChange={handleChange}
  //         required
  //       />
  //       <br />
  //       <button type="submit">Add Item</button>
  //     </form>

  //     <h2>Items List</h2>
  //     <table className='table'>

  //       {items.map(item => (
  //         <tr key={item._id}>
  //           <td>{item.name}</td>
  //           <td>{item.description}</td>
  //           <td>{item.price}</td>      
  //       </tr>
  //       ))}
  //     </table>
  return(
    <div>
  <Student />
    </div>
  );
}

export default App
