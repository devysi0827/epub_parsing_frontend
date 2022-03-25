import React from 'react'

function ReactH() {

        const {
            HClass,
            HId,
            HContent
        } = props;
    
        return (
            <>
            <p className={HClass} id={HId}>
                {HContent}
            </p>
            </>
        );
}


export default ReactH