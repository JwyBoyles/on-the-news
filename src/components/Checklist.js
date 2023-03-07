import React from "react";

function Checklist(props) {

    const siteNames = [
        'Al Jazeera',
        'Ars Technica',
        'AP News',
        'Axios',
        'BBC',
        'Bloomberg',
        'Breitbart',
        'Buzzfeed',
        'CBS',
        'CNN',
        'ESPN',
        'Fortune',
        'Fox News',
        'The Independent',
        'MSNBC',
        'NBC News',
        'Newsweek',
        'New York Magazine',
        'Politico',
        'Reuters',
        'TechCrunch',
        'The Next Web',
        'The Hill',
        'Wall Street Journal',
        'Washington Post',
        'Time',
        'USA Today',
        'Vice',
        'Wired'
      ];

    const checkBoxElements = props.sources.map(( value, index) => {
        return (
          
          <li key={index}>
            <div>
              
              <label>{siteNames[index]}</label>
                <input
                  type="checkbox"
                  id={`custom-checkbox-${index}`}
                  name={value}
                  value={value}
                  checked={props.checkedState[index]}
                    onChange={() => props.handleChangeList(index)}
                />
              </div>
            
          </li>
        );
      })

  
    return (
      <div className="Checkbox">
        <ul>
          {checkBoxElements}
          </ul>
      </div>
    );
  }
  
  export default Checklist;
  