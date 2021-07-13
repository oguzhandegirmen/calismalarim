import React from 'react' ;
import  ReactDom from 'react-dom';
import "./index.css";


const Person = ({img,name,job,children}) =>{
 
  const url=`https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    
    <article className="person">
      <img src={url} alt="person"/>
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};
   
const PersonList = () => {

  return (
       
       <section className="person-list">
          <Person img="84" name="Osman" job="Developer" />  
         <Person img="12" name="Can Boz" job="yazilimci">
         <p>
           Hakkımda 
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste suscipit corporis nisi minus delectus fugit impedit fuga facere deserunt doloribus aperiam omnis distinctio, dignissimos unde neque illum corrupti necessitatibus!
         </p>
         </Person>
         <Person img="76" name="Mehmet" job="The Boss" />    
       </section>  
    );

  };

ReactDom.render(<PersonList/>,document.getElementById("root"));