import React, { useEffect, useState } from 'react'
import './index.scss'
import axios from "axios";

function Services() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:2710/users').then((response) => {
            setPost(response.data);
        });
    }, []);
    return (
        <section className='DataSEC'>
            <div className='servicesHead'>
                <h2>SERVICES</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
            <div className='allCards'>
                {
                    post.map((element) =>
                        <div className='dataAxios'>
                            <i class={element.imageUrl}></i>
                            <h3>{element.name}</h3>
                            <p>{element.description}</p>
                            <p>{element._id}</p>
                            <button onClick={() => {
                                axios.delete("http://localhost:2710/users/" + element._id).then(() => {
                                    axios.get('http://localhost:2710/users').then((response) => {
                                        setPost(response.data);
                                    });
                                })
                            }}>X</button>
                        </div>

                    )


                }
            </div>


        </section>
    )
}

export default Services