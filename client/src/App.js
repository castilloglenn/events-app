import React from 'react'

function App() {

    // const [data, setData] = useState([{}])

    // useEffect(() => {
    //     fetch("/fetchAll")
    //         .then(response => response.json())
    //         .then(
    //             data => {
    //                 setData(data)
    //                 console.log(data)
    //             }
    //         )
    // }, [])

    return (
        <div className='App'>
            <h1 className='title'>Create New Event</h1>
            <div className="container createEvent">
                <p>Event Name: <input type="text" /></p>
                <p>Start: <input type="datetime-local" name="" id="" /></p>
                <p>End: <input type="datetime-local" name="" id="" /></p>
                <button>Create Event</button>
            </div>
            <h1 className='title'>List of Events</h1>
            <div className='container' id='0'>
                <p>Sample event #1: Initial Interview</p>
                <p>Date: 1:00PM-2:00PM, September 22, 2023</p>
                <button>Edit</button>
                <button>Delete</button>
            </div>
            <div className='container' id='1'>
                <p>Sample event #2: Technical Interview</p>
                <p>Date: 2:00PM-3:00PM, September 22, 2023</p>
                <button>Edit</button>
                <button>Delete</button>
            </div>
            <div className='container' id='2'>
                <p>Sample event #3: Skills Test</p>
                <p>Date: 2:00PM-3:00PM, September 22, 2023</p>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default App
