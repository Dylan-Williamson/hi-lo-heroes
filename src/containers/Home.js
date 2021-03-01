import React from "react";
import { Link } from 'react-router-dom'

const Home = () => {
        return (
                <>
                    <img className="logo" src="https://i.ibb.co/vjH9ynC/Screen-Shot-2021-03-01-at-12-26-52-PM.png" alt="Hi-Lo Heroes" /><br/>
                    <img className="text-logo" src="https://i.ibb.co/0rWttYq/Screen-Shot-2021-03-01-at-12-32-38-PM.png" alt="Hi-Lo Heroes" /><br/>
                    <Link to="#">
                        <button className="start-btn">
                            Start Counting
                        </button>
                    </Link>
                </>
        )
}

export default Home