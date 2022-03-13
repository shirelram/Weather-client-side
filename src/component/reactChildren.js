import React, { useState } from 'react';

export default function MyForm(props) {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
   
    const [currentPage, setCurrentPage] = useState(0);
    const numberOfPages = React.Children.count(props.children);
   

    function pageComponent(pageIndex) {
        const allChildProps = { name, setName, lastName, setLastName };
        const page = React.Children.toArray(props.children)[pageIndex];
        return React.cloneElement(page, allChildProps);
        // <SelectHobbies {name}
         
    }

    return (
        <div >
            <button
                disabled={currentPage === 0}
                onClick={(e) => setCurrentPage(v => v - 1)}
            >&lt; לעמוד קודם
        </button>

            <button
                disabled={currentPage >= numberOfPages - 1}
                onClick={(e) => setCurrentPage(x => x + 1)}
            >לעמוד הבא  &gt;</button>

            { pageComponent(currentPage)}

        </div>
    );
}
