import React from "react";

const Searchbar = (props) => {
  return (
    <div>
      <input
        type="text"
        className="searchbar"
        onChange={props.onChange}
        style={{height:44}}/>
      <select onChange={props.selectSearchType}>
        <option value="title">By Title</option>
        <option value="author">By Author</option>
        <option value="category">By Category</option>
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
