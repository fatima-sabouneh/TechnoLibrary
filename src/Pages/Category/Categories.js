import React, { useState, useEffect } from "react";

const Categories = () => {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    document.title = "Techno - Categories"
  }, [])
  return (
    <div className="categ container-fluid afterHeader">
      <div className="category">
        <h3 className="bookCat">Book Categories</h3>
        <div className="search">
          <input
          className="search"
            type="text"
            placeholder="Search here"
            onChange={handleChange}
            value={searchInput}
          />
          <table className="tableCat">
          <tr>
              <th>SCI-FI</th>
              <th>COMEDY</th>
              <th>FANTASY</th>
            </tr>
            <tr>
            <td>
                  <a class="links"href="#">Book1</a>
                    </td>
                    <td>
                  <a class="links"href="#">Book2</a>
                    </td>
                    <td>
                    <a class="links"href="#">Book3</a>
                    </td>
                </tr>
            <tr>
              <th>ROMANCE</th>
              <th>HORROR</th>
              <th>THRILLER</th>
            </tr>
            <tr>
            <td>
                  <a class="links"href="#">Book1</a>
                    </td>
                    <td>
                    <a class="links"href="#">Book1</a>
                    </td>
                    <td>
                    <a class="links"href="#">Book3</a>
                    </td>
                    
                </tr>
               
              
          </table>
        </div>
      </div>
    </div>
  );
};

export default Categories;
