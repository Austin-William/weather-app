import React from 'react';

import Spinner from "../components/Spinner";

import '../styles/widgets/Sports.scss';

interface Props {
    data: any;
}

function Sports(props: Props) {
    const [isLoaded, setIsLoaded] = React.useState(false);

    const data = props.data.sports;

    function delayDisplay() {
        setTimeout(() => {
            setIsLoaded(true);
        }, 1000);
    }

    React.useEffect(() => {
        delayDisplay();
    }, [isLoaded]);

    return (
        <div className='sports'>
            {
                isLoaded ?
                    <div className="container">
                        <h1 className="title">Sports</h1>
                    </div>
                    :
                    <Spinner />
            }
        </div>
    )
}

export default Sports;