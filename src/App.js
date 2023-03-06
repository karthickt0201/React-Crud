  import './App.css';
import { Crud } from './crud';
import { Routes,Route } from 'react-router-dom';
import { Create } from './creat';
import { Edit } from './edt';

function App(){
  return(
    <div className='ka m-5'>
      <Routes>
        <Route path="/" element={<Crud/>} />
        <Route path="creat" element={<Create/>} />
        <Route path="edt/:id" element={<Edit/>} />
      </Routes>
</div>
);

};
export default App;
// function App() {

//   useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/posts").then(data => data.json()).then(data =>{
//       console.log(data);
//     });
//   },[]);
//   return (
// <div>

// </div>
//   );
// }


