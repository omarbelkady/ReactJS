import React, {useState, useEffect} from 'react';
import {Row, Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Input, Button} from "reactstrap";

import Table from "./Table";

const Book = props => {
    const [totalTables, setTheTotalTables] = useState([]);

    //what the user selects
    const [userSelection, setUserSelection] = useState({
        table: {
            name: 1, //null
            id: 1   //null
        },
        date: new Date(),
        time: null,
        location: "Somewhere in the world!",
        size: 0
    })

    const [theBooking, setTheBooking] = useState({
        name: "",
        phone: "",
        email: ""
    });

    //Your Location Maybe ??
    const [locations] = useState("Anywhere", "Home", "Porch", "Patio", "Inside", "Field");

    const [times] = useState([
        "9AM",
        "10AM",
        "11AM",
        "12AM",
        "1PM",
        "2PM",
        "3PM",
        "4PM",
        "5PM",
        "6PM",
        "7PM",
        "8PM",
        "9PM",
        "10PM",
        "11PM",
    ]);

    const [reservationErr, setReservationErr] = useState(false);

    const getDate = _ => {
        const months = [
            "January", "February", "March",
            "April", "May", "June",
            "July", "August", "September", 
            "October", "November", "December"
        ];
        const date = months[userSelection.date.getMonth()] + 
        " " + 
        userSelection.date.getDate() + 
        " " + userSelection.date.getFullYear();

        let time = userSelection.time > 12 ? time +12 + ":00" : time + ":00";

        console.log(time);

        const dateTime = new Date(date + " " + time);

        return dateTime;


    }

    const getEmptyTables = _ => {
        let tables = totalTables.filter(atable => atable.isAvailable);
        return tables.length;
    }

    useEffect(_ => {
        //Check availability of tables from the database
        if(userSelection.time && userSelection.date){
            (async _ =>{
                let dateTime = getDate()
                let response= await fetch("https://localhost:3005/availability",{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        date: dateTime
                    })
                })

                response = await response.json();

                //filter tables with the location and size criteria
                
                let tables = response.tables.filter(
                    table => 
                        (userSelection.size > 0 ? table.capacity >= userSelection.size : true) &&
                        (userSelection.location !== "Any Location"
                        ? table.location === userSelection.location
                        : true )
                );

                setTheTotalTables(tables);
            })();
        }
    },[userSelection.time, userSelection.date, userSelection.size, userSelection.location]
    );

    //Placing a reservation if all the details are filled out
    const reserveYourSpot = async _ => {
        if(
            theBooking.name.length === 0 | 
            theBooking.phone.length === 0 |
            theBooking.email.length === 0 
        )   {
            console.log("Not Enough Information");
            setReservationErr(true);
        }
        else{
            const dateTime = getDate()
            let response = await fetch("https://localhost:3005/reserve",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...theBooking,
                    date: dateTime,
                    table: userSelection.table.id
                })
            });
            response = await response.text();
            console.log("Your Table Has Been Reserved " + response);
            props.setPage(2);
        }
    };

    const tableSelection = (tab_name, tab_id) => {
        setUserSelection({
            ...userSelection,
            table: {
                name: tab_name,
                id: tab_id
            }
        });
    };

    const getSizes = _ => {
        let newSizes = []
        for(let x= 1; x<8;x++){
            newSizes.push(
                <DropdownItem
                    key={x}
                    className="booking-dropdown-item"
                    onClick={ev => {
                        let newSelection = {
                            ...userSelection,
                            table:{
                                ...userSelection.table
                            },
                            size: x
                        }
                        setUserSelection(newSelection)
                    }}
                >{x}</DropdownItem>
            )
        }
        return newSizes;

    };

    const getLocations = _ => {
        let newLocations = []
        locations.forEach(loca => {
                newLocations.push(
                    <DropdownItem
                        key={loca}
                        className="booking-dropdown-item"
                        onClick={_ => {
                            let newSelection = {
                                ...userSelection,
                                table:{
                                    ...userSelection.table
                                },
                                location: loca
                            }
                            setUserSelection(newSelection)
                        }}
                    >{loca}</DropdownItem>
                );
            });
        return newLocations;
    };

    const getTimes = _ => {
        let newTimes = []
        times.forEach(time => {
                newTimes.push(
                    <DropdownItem
                        key={time}
                        className="booking-dropdown-item"
                        onClick={_ => {
                            let newSelection = {
                                ...userSelection,
                                table:{
                                    ...userSelection.table
                                },
                                time: time
                            }
                            setUserSelection(newTimes)
                        }}
                    >{time}</DropdownItem>
                );
            });
        return newTimes;
    };


    const getTables = _ =>{
        console.log("Retrieving You The Tables")
        if(getEmptyTables() > 0){
            let tables = []
            totalTables.forEach(atable=>{
                if(atable.isAvailable){
                    tables.push(
                        <Table
                            key={atable.tab_id}
                            id={atable.tab_id}
                            chairs={atable.capacity}
                            name={atable.tab_name}
                            empty
                            selectTable={tableSelection}
                        />
                    )
                }
                else{
                    tables.push(
                        <Table
                            key={atable.tab_id}
                            id={atable.tab_id}
                            chairs={atable.capacity}
                            name={atable.tab_name}
                            selectTable={tableSelection}
                        />
                    )
                }
            });
            return tables;
        }
    }

    return( 
        <div>
            <Row noGutters className="text-center align-items-center pizza-cta">
                <Col>
                    <p className="looking-for-pizza">
                        {!userSelection.table.id ? "Book A Table Now" : "Confirm Reservation"}
                        <i 
                            className={
                                !userSelection.table.id
                                ? "fas fa-chair pizza-slice"
                                : "fas fa-clipboard pizza-slice"}
                        ></i>
                    </p>
                    <p className="selected-table">
                        {userSelection.table.id 
                        ? " You are booking Table " + userSelection.table.name
                        : null }
                    </p>
                    {reservationErr ? (
                        <p className="reservation-error">
                            *Please fill out all the fields for us to successfully accept your reseration
                        </p>
                    ) : null }
                </Col>
            </Row>


                {!userSelection.table.id ? (
                    <div id="reservation-stuff">
                        <Row noGutters className="text-center align-items-center">
                            <Col xs="12" sm="3">
                                <input 
                                type="date"
                                required="required"
                                className="booking-dropdown"
                                value={userSelection.date.toISOString().split("T")[0]}
                                onChange = {ev => {
                                    if(!isNaN(new Date(new Date(ev.target.value))))
                                    {
                                        let newUserSelection = {
                                            ...userSelection,
                                            table: {
                                                ...userSelection.table
                                            },
                                            date: new Date(ev.target.value)
                                        }
                                        setUserSelection(newUserSelection)
                                    }

                                    else{
                                        console.log("Date Entered in Invalid");
                                        let newUserSelection = {
                                            ...userSelection,
                                            table: {
                                                ...userSelection.table
                                            },
                                            date: new Date()
                                        }
                                        setUserSelection(newUserSelection)
                                    }

                                }}
                                ></input>
                            </Col>
                            <Col xs="12" sm="3">
                                <UncontrolledDropdown>
                                    <DropdownToggle color="none" caret className="booking-dropdown">
                                        {userSelection.time === null ? "Please Select A Time" : userSelection.time}
                                    </DropdownToggle>
                                    <DropdownMenu
                                        right
                                        className="booking-dropdown-menu">
                                        {getTimes()}
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Col>
                            <Col xs="12" sm="3">
                                <UncontrolledDropdown>
                                    <DropdownToggle color="none" caret className="booking-dropdown">
                                        {userSelection.location}
                                    </DropdownToggle>
                                    <DropdownMenu
                                        right
                                        className="booking-dropdown-menu">
                                        {getLocations()}
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Col>
                            <Col xs="12" sm="3">
                                <UncontrolledDropdown>
                                    <DropdownToggle color="none" caret className="booking-dropdown">
                                        { userSelection.size === 0 
                                        ? "Select The Size Of Your Party" 
                                        : userSelection.size.toString()}
                                    </DropdownToggle>
                                    <DropdownMenu
                                        right
                                        className="booking-dropdown-menu">
                                        {getSizes()}
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Col>
                        </Row>
                        <Row noGutters className = "table-display">
                                <Col>
                                    {getEmptyTables() > 0 ? (
                                        <p className="available-tables">{getEmptyTables()} available</p>
                                    ): null}
                                    {userSelection.date && userSelection.time? (
                                        getEmptyTables() > 0 ? (
                                            <div>
                                                <div className="table-key">
                                                    <span className="empty-table"> &nbsp; Available &nbsp;&nbsp; Spots</span>
                                                    <span className="full-table"> &nbsp; Unavailable &nbsp;&nbsp; Spots</span>
                                                </div>
                                                <Row noGutters>{getTables()}</Row>
                                            </div>
                                        ) : (
                                            <p className="table-display-message">No Available Tables</p>
                                        )
                                    ) : (
                                        <p className="table-display-message">Please Select A Date and Time For Your Reservation</p>
                                    )
                                            
                                    }
                                </Col>
                        </Row>
                    </div>
                ) : (
                    <div id="confirm-reservation-stuff">
                        <Row noGutters className="text-center justify-content-center reservation-details-container">
                            <Col xs="12" sm="3" className="reservation-details">
                                <Input 
                                    type="text"
                                    bsSize="lg"
                                    placeholder="Name"
                                    className="reservation-input"
                                    value={theBooking.name}
                                    onChange={ev => {
                                        setTheBooking({
                                            ...theBooking,
                                            name: ev.target.value
                                        })
                                    }}
                                />
                            </Col>

                            <Col xs="12" sm="3" className="reservation-details">
                                <Input 
                                    type="text"
                                    bsSize="lg"
                                    placeholder="Phone Number"
                                    className="reservation-input"
                                    value={theBooking.phone}
                                    onChange={ev => {
                                        setTheBooking({
                                            ...theBooking,
                                            phone: ev.target.value

                                        })
                                    }}

                                />
                            </Col>

                            <Col xs="12" sm="3" className="reservation-details">
                                <Input 
                                    type="text"
                                    bsSize="lg"
                                    placeholder="Email"
                                    className="reservation-input"
                                    value={theBooking.email}
                                    onChange={ev => {
                                        setTheBooking({
                                            ...theBooking,
                                            email: ev.target.value
                                        })
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row noGutters className="text-center">
                            <Col>
                                <Button
                                    color="none"
                                    className="book-table-btn"
                                    onClick={_ => {
                                        reserveYourSpot()
                                    }}>
                                    Book Now
                                </Button>
                            </Col>
                        </Row>
                    </div>
                )}

        </div>
    )
}

export default Book;