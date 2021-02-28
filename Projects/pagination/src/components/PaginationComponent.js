import React,{ useEffect, useState} from 'react';
import "./styles.css"

//creating a small component to render the data
const renderTheData = data => {
    return(
        <ul>
            {data.map((todo, elem)=>{
                return <li key={elem}>{todo.title}</li>
            })}
        </ul>
    )
}

function PaginationComponent() {
    {/* I Need State To Save Data therefore I use the useState Hook  
    I create a state variable called data*/}
    const [data, setData] = useState([]);

    {/*The current layout is not good for the user because it displays all the data 
    I need to create two more states:
    State 1: Store the current page number and initialize the state to 1
    State 2: Tell ReactJS how many items you want to display per single page
    */}
    const [theCurrentPage,setCurrentPage] = useState(1);
    const [elemsPerPage, setElemsPerPage] = useState(4);

    const [pageNumLim, setPageNumLim] = useState(5);
    const [maxPageNumLim, setMaxPageNumLim] = useState(5);
    const [minPageNumLim, setMinPageNumLim] = useState(0);


    {/*Click handler for each page */}
    const clickHandler = (ev) => {
        setCurrentPage(Number(ev.target.id));
    }

    {/*Creating an array for the total count of  pages */}
    const myarray = [];

    for(let i=1;i<= Math.ceil(data.length / elemsPerPage);i++){
        myarray.push(i);
    }

    const indexOfLast = theCurrentPage * elemsPerPage;
    const indexOfFirst = indexOfLast - elemsPerPage;
    const currentElem = data.slice(indexOfFirst, indexOfLast);

    {/*Creating a small component to render the page count 
    using the active class(aka className )*/}
    const renderThePageNum = myarray.map(num =>{
       if(num < maxPageNumLim+1 && num > minPageNumLim)
       {
            return(
                <li
                    key={num}
                    id={num}
                    onClick={clickHandler}
                    className={theCurrentPage == num ? "active": null}>
                        {num}
                    </li>
            );
       }
       else{
           return null;
       }
    });

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => setData(json))
    }, [])

    const nextHandlerbtn = ()=>{
        setCurrentPage(theCurrentPage+1);

        /*Handling the limits for max and min page limit so that user cannot click after reaching min or max */
        if(theCurrentPage+1 > maxPageNumLim){
            setMaxPageNumLim(maxPageNumLim+pageNumLim);
            setMinPageNumLim(minPageNumLim+pageNumLim);
        }
    }

    const prevHandlerbtn = ()=>{
        setCurrentPage(theCurrentPage-1);

        /*Handling the limits for max and min page limit so that user cannot click after reaching min or max */
        if((theCurrentPage-1) % maxPageNumLim == 0){
            setMaxPageNumLim(maxPageNumLim-pageNumLim);
            setMinPageNumLim(minPageNumLim-pageNumLim);
        }
    }

   

    /*&hellip: Function used to tell the user that there are more pages available &hellip is the three dots
    symbol used to show an incomplete statement. Ellipses are used in on-screen menus to convey that there is more to come."
    */
    let incremPageBtn = null;
    if(myarray.length > maxPageNumLim)
    {
        incremPageBtn = <li onClick={nextHandlerbtn}>&hellip;</li>
    }

    let decremPageBtn = null;
    if(minPageNumLim >= 1)
    {
        decremPageBtn = <li onClick={prevHandlerbtn}>&hellip;</li> 
    }

    const loadMoreHandlerBtn = () =>{
        setMinPageNumLim(pageNumLim+5);
    };

    return (
        <>
        <h1>Daily Tasks</h1><br/>
            {renderTheData(currentElem)}
            <ul className="pageNumbers">
             {/*Adding Next And Previous Buttons */}
                <li>

                    <button onClick={prevHandlerbtn}
                    disabled={theCurrentPage == myarray[0]?true:false}>
                     {/*Disabling The Previous Buttons After a Certain Condition*/}
                    Previous
                    </button>
                </li>
                {decremPageBtn}
                {renderThePageNum}
                {incremPageBtn}
               
                <li>
                    <button
                    onClick={nextHandlerbtn}
                    disabled={theCurrentPage == myarray[myarray.length-1] ? true : false}
                    >
                    Next
                    </button>
                </li>
            </ul>
            <button onClick={loadMoreHandlerBtn} className="loadmore">
                Load More 429ers
            </button>

        </>
    )
}

export default PaginationComponent;
