import React from 'react'

function ReactP() {

        const {
            paragraphClass,
            paragraphId,
            paragraphContent
        } = props;
    
        return (
            <>
            <p className={paragraphClass} id={paragraphId}>
                {paragraphContent}
            </p>
            </>
        );
}


export default ReactP