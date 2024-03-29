import React from 'react';
import { Container, Row } from 'react-bootstrap';
import "./styles/donation.css"

const Donation = () => {
    return (
        <Container className='donation-component'>
            <Row className="align-items-center content-container">
                <section className="video-container">
                    <video autoPlay muted loop>
                        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="overlay"></div>
                    <div className="content">
                        <h3>
                            Donate here!
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem neque officiis optio dicta officia molestias totam veniam magnam odit magni quis nemo pariatur, voluptas consequuntur quam voluptatem illum adipisci doloribus minima praesentium incidunt! Veritatis, rerum!
                        </p>
                        <button className='btn donate-btn'>
                            Donate
                        </button>
                    </div>
                </section>

            </Row>
        </Container>
    );
};

export default Donation;
