import {React, useEffect, useState} from "react";

function News(props) {

  const [sectionOne, setSectionOne] = useState()
  const [sectionTwo, setSectionTwo] = useState()
  const [sectionThree, setSectionThree] = useState()
  const [sectionFour, setSectionFour] = useState()

  useEffect(() => {  
    if(props.sourceList[0] !== undefined) {
    const filteredHeadlines = props.headlines.filter(value => value.url.includes(props.sourceList[0]))
    console.log(filteredHeadlines.length)
    if (filteredHeadlines.length === 0) {
      setSectionOne((() => {
        return (
            <div>
                <p>Sorry No Results Were Found, Using a larger number of sources can sometimes reduce search results.</p>
            </div>
        )
      }))  
    } else { 
    setSectionOne(filteredHeadlines.map((value) => {
      return (
          <div>
              {/* <h1 className="title">{value.source.name}</h1> */}
              <a href={value.url}>{value.title}</a>
              <p>{value.description}</p>
              <div className="divider"></div>
          </div>
      )
    }))  
  }}
  if(props.sourceList[1] !== undefined) {
    const filteredHeadlines = props.headlines.filter(value => value.url.includes(props.sourceList[1]))
    if (filteredHeadlines.length === 0) {
      setSectionTwo((() => {
        return (
            <div>
                <p>Sorry No Results Were Found, Using a larger number of sources can sometimes reduce search results.</p>
            </div>
        )
      }))  
    }
     else {
    setSectionTwo(filteredHeadlines.map((value) => {
      return (
          <div>
              <a href={value.url}>{value.title}</a>
              <p>{value.description}</p>
              <div className="divider"></div>
          </div>
      )
    }))  
  }}
  if(props.sourceList[2] !== undefined) {
    const filteredHeadlines = props.headlines.filter(value => value.url.includes(props.sourceList[2]))
    if (filteredHeadlines.length === 0) {
      setSectionThree((() => {
        return (
            <div>
                <p>Sorry No Results Were Found, Using a larger number of sources can sometimes reduce search results.</p>
            </div>
        )
      }))  
    } else {
    setSectionThree(filteredHeadlines.map((value) => {
      return (
          <div>
              <a href={value.url}>{value.title}</a>
              <p>{value.description}</p>
              <div className="divider"></div>
          </div>
      )
    }))  
  }}
  if(props.sourceList[3] !== undefined) {
    const filteredHeadlines = props.headlines.filter(value => value.url.includes(props.sourceList[3]))
    if (filteredHeadlines.length === 0) {
      setSectionFour((() => {
        return (
            <div>
                <p>Sorry No Results Were Found, Using a larger number of sources can sometimes reduce search results.</p>
            </div>
        )
      }))  
    } else {
    setSectionFour(filteredHeadlines.map((value) => {
      return (
          <div>
              <a href={value.url}>{value.title}</a>
              <p>{value.description}</p>
              <div className="divider"></div>
          </div>
      )
    }))  
  }
}},[props.headlines])

    return (
      <div className="News">
        {props.sourceList[0] && <div>
            <h1>{props.sourceList[0].split('.')[0].toUpperCase()}</h1>
          <div className="newsContainer">
          {sectionOne}
          </div>
        </div> }
        {props.sourceList[1] && <div>
        <h1>{props.sourceList[1].split('.')[0].toUpperCase()}</h1>
        <div className="newsContainer">
          {sectionTwo}
          </div>
        </div> }
        {props.sourceList[2] && <div>
        <h1>{props.sourceList[2].split('.')[0].toUpperCase()}</h1>
        <div className="newsContainer">
          {sectionThree}
          </div>
        </div> }
        {props.sourceList[3] && <div>
        <h1>{props.sourceList[3].split('.')[0].toUpperCase()}</h1>
        <div className="newsContainer">
          {sectionFour}
          </div>
        </div> }
      </div>
    );
  }
  
  export default News;
  