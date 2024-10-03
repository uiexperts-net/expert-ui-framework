import React from 'react';

export interface ZListProps {
    items: string[];
}

const ZList: React.FC<ZListProps> = ({ items }) => {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
};

export default ZList;
