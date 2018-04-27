import React from 'react';

const List = ({words}) => {
    return (
        <ul>
           { words.map( word => {
                return <li> {word.wordFrom + '=>' + word.wordTo}</li> 
            })}   
        </ul>
    );
};

export default List;