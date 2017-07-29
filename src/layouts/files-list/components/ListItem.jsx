import React from 'react';

const ListItem = (address) => {
    return (
        <div className="dc-listItem">
            <div>
                <img
                    className="dc-listItem__image"
                    src="http://icons.iconarchive.com/icons/grafikartes/flat-retro-modern-2/512/preview-icon.png"
                    alt="cover"
                />
            </div>
            <div>{JSON.stringify(address)}</div>   
            <div><button>Buy</button></div> 
        </div>
    );
};

export default ListItem;
