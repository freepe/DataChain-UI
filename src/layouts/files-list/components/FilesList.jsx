import React from 'react';
import ListItem from './ListItem';

const FilesList = ({ filesList, payForFile }) => {
    if (!filesList || !filesList.length) {
        return (<div>No items</div>);
    }

    return (
        <div className="container">
            {
                filesList.map(file => (
                    <ListItem
                        key={file}
                        listItem={file}
                    />))
            }
        </div>
    )
}

export default FilesList;
