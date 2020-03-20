import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SmurfInfo from './SmurfInfo';
import { getSmurfs } from '../actions/smurfsActions';


function GridLayout (props) {
    useEffect(() => {
        props.getSmurfs();
    }, [props.data])

    return (
        <div>
            {props.data &&
            <div className="grid">
                {props.data.map(smurf => (
                    <SmurfInfo 
                    key={smurf.id} 
                    name={smurf.name} 
                    age={smurf.age} 
                    height={smurf.height}
                    />
                ))}
            </div>
        }
        </div>
    );
         
}

const mapStateToProps = state => ({
    data: state.data,
    error: state.error,
    isFetching: state.isFetching
});

export default connect (
    mapStateToProps,
    { getSmurfs }
)(GridLayout);