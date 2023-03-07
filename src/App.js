import {React, useState} from 'react';
import './App.css';
import Checklist from './components/Checklist.js'
import News from './components/News.js'

function App() {

  const sources = [
    'aljazeera.com',
    'arstechnica.com',
    'apnews.com',
    'axios.com',
    'bbc.co.uk',
    'bloomberg.com',
    'breitbart.com',
    'buzzfeednews.com',
    'cbsnews.com',
    'cnn.com',
    'espn.com',
    'fortune.com',
    'foxnews.com',
    'independent.co.uk',
    'msnbc.com',
    'nbcnews.com',
    'newsweek.com',
    'nymag.com',
    'politico.com',
    'reuters.com',
    'techcrunch.com',
    'thenextweb.com',
    'thehill.com',
    'wsj.com',
    'washingtonpost.com',
    'time.com',
    'usatoday.com',
    'vice.com',
    'wired.com'
  ];

  const [qValue, setQValue] = useState("")

  const [checkedState, setCheckedState] = useState(
    new Array(sources.length).fill(false)
);

  const [sourceList, setSourceList] = useState ([])

  const [headlines, setHeadlines] = useState([])

  const [loading, setLoading] =useState(false)

  
  function handleChangeList(position) {
    const updatedCheckedState = checkedState.map((value, index) =>
      index === position ? !value : value
    );

    let valueCounter = 0

    for (let i = 0; i <= updatedCheckedState.length; ++i){
      if (updatedCheckedState[i] === true){
        ++valueCounter
      }
    }

    if (valueCounter <= 4) {
    setCheckedState(updatedCheckedState);
    }
    if(sourceList.includes(sources[position]) === false){
    setSourceList([...sourceList, sources[position]])
    } 

    if(sourceList.includes(sources[position]) === true){
      setSourceList(sourceList.filter(value => !value.includes(sources[position])))
    }

  };


  function handleChange(event) {
    setQValue(event.target.value)
  }

  function getHeadlines() {
  setLoading(true)
  
  const domains =  sourceList.toString();

  // search supports spaces in qvalue, using no spaces makes search too specific (ex. unitedstates has no results)
  const url = `https://newsapi.org/v2/everything?q=${qValue}&domains=${domains}&apiKey=753e88ac109541da91354dd39814e812`

  let req = new Request(url);

  fetch(req)
    .then(function(response) {
        return (response.json());
    }).then(function(response) {
      if(response.code === "rateLimited")
      {
        console.log("rateLimited")
      }else {
      setHeadlines(response.articles)
      setLoading(false)
      }
    }).catch(function(error) {
      
    })
  
  }

function newSearch(){
  setQValue("")
  setCheckedState(checkedState.fill(false))
  setSourceList([])
  setHeadlines([])
}


  

  return (
    <div className="App">
      <h1>In The News:</h1>
      <div className='searchContainer'>
        <input type="text"
        name="qvalue"
        value={qValue}
        placeholder={"Search"}
        onChange={handleChange}></input>
        {headlines.length === 0 && <button onClick={getHeadlines}>Get Headlines</button>}
        {headlines.length > 0 && <button onClick={newSearch}>New Search</button>}
        </div>
        {headlines.length === 0 && <p className='instructions'>Select Up to Four Sources</p>}
        {loading && <p className='loading'>Getting the news...</p>}
        {headlines.length === 0 && <Checklist 
        sources={sources}
        checkedState={checkedState}
        handleChangeList={handleChangeList}/>}
        {headlines.length >0 && <News
        headlines={headlines}
        sourceList={sourceList}
        />}
    <div className='disclaimer'>This website is just a tool to gather stories. The websites chosen were due to popularity and access, not the creator's views.
    The creator of this website does not endorse any statements that are made in the articles found from this site, 
    nor can he guarantee the veracity or accuray of any stories linked</div>
    </div>
  );
}

export default App;
