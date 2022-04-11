import ka from "date-fns/locale/ka";
import React,  { useState, useEffect } from "react";

export default function AddArticle () {
  const LOCAL_STORAGE_KEY = "articles";
  const [articleName, setArticleName] = useState('');
  const [compoundType, setCompoundType] = useState('');
  const [department, setDepartment] = useState('');
  const [articles, setArticles] = useState([]);



  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setArticleName(e.target.value)
  //   setCompoundType(e.target.value)
  // }

   
  const addArticle = (e) => {
    e.preventDefault();
    let articleObject = {
      articleName: articleName,
      compoundType: compoundType, 
      department: department
   }
   setArticles(articleObject)
   console.log(articles)
   window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(articles))
   setArticleName('');
   setCompoundType('');
   setDepartment('');

  }
  
  // useEffect(() => {
  //   window.localStorage.setItem('article', JSON.stringify(article));
  //  }, [article]);

  return (
    <div>
      <h1>Add Article</h1>
      <form className="container">
  <label>
    Article Name:
    <input type="text" name="articleName" value={articleName} onChange={(e) => setArticleName(e.target.value)}/>
  </label>
  <label>
    Compound Type
    <input type="text" name="compoundType" value={compoundType} onChange={(e) => setCompoundType(e.target.value)}/>
  </label>
  <label>
    Department:
    <input type="text" name="department" value={department} onChange={(e) => setDepartment(e.target.value)}/>
  </label>
 
  <input onClick={addArticle}type="submit" value="Add"/>
</form>
    </div>

    

  )
};