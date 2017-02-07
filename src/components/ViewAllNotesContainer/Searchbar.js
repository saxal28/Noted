import React from "react";
const style = {height:38, border:"none", boxShadow:"rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px"};


const Searchbar = (props) => {
  return (
    <div>
      <input
        type="text"
        className="searchbar"
        onChange={props.onChange}
        style={style}/>
      <select
        onChange={props.selectSearchType}
        style={style}>
        <option value="title">By Title</option>
        <option value="author">By Author</option>
        <option value="category">By Category</option>
        <option value="summary">By Summary</option>
      </select>

    </div>
  )
}

export default Searchbar;


// <select>
//   {props.categories ? props.categories.categories.map(category => {
//     return <option> {category} </option>
//   }) : "..."}
// </select>
