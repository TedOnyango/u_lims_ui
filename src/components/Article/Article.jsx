import React,  { useState } from "react";

export default function Article () {
  const [articleName, setArticleName] = useState('');
  const [compoundType, setCompoundType] = useState('');
  const [department, setDepartment] = useState('');



  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setArticleName(e.target.value)
  //   setCompoundType(e.target.value)
  // }

   
  const addArticle = (e) => {
    e.preventDefault();
    if(articleName == '' || compoundType == '' || department == ''){
      console.error("All fields Must Be Provided")
    }
    console.log(articleName)
    console.log(compoundType)
    console.log(department)
    let article = {
      articleName: articleName,
      compoundType: compoundType,
      department: department
    }
    console.log(article)
    // localStorage.set("Articl Name", articleName)


    setArticleName('');
    setCompoundType('');
    setDepartment('');


  }
  return (
    <div>
      <h1>This is Article</h1>
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
    <input type="text" name="department" onChange={(e) => setDepartment(e.target.value)}/>
  </label>
 
  <input onClick={addArticle}type="submit" value="Add"/>
</form>
    </div>

    

  )
};