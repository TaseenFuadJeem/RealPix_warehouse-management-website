import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Slide } from 'react-reveal';

const containerStyle = {
    width: '350px',
    height: '350px',
    borderRadius: '20px',
    border: "2px solid #5EA4FA",
};

const center = {
    lat: -33.94774359700167,
    lng: 151.13967516931552
};

function MyComponent() {
    return (
        <div className='lg:px-32'>
            <h1 className='text-center text-4xl font-semibold'>Contact Us</h1>
            <div className='grid lg:grid-cols-2 my-24'>
                <Slide left>
                    <div className='flex items-center justify-center mb-5'>
                        <div className='text-center'>
                            <h1 className='text-3xl font-bold mb-5 text-blue-600'>TRADING HOURS:</h1>
                            <p className='text-xl font-semibold text-gray-500 mb-5'>Mon-Fri - 9:00am–5:00pm |Sat - 10:00am–4:00pm</p>
                            <p className='text-xl font-semibold text-gray-500'>Shop 1, 395 Princes Highway, Rockdale NSW 2216 (Next to Anaconda/Spotlight)</p>
                        </div>
                    </div>
                </Slide>
                <Slide right>
                    <div className='mx-auto'>
                        <LoadScript
                            googleMapsApiKey="AIzaSyAZe84TgW70kFuFgoy-gqJBjgLZ7fLt-GA"
                        >
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={center}
                                zoom={16}
                            >
                                <Marker
                                    position={center}
                                />
                            </GoogleMap>
                        </LoadScript>
                    </div>
                </Slide>
            </div>
        </div>
    )
}

export default React.memo(MyComponent)