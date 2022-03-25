import React from 'react'

function ReactImg() {

        const {
            imgClass,
            imgId,
            imgContent
        } = props;
    
        return (
            <>
            {imgContent 
            ?
                <img 
                className={imgClass} 
                id={imgId}
                src={`data:image/jpg;base64,${imgContent}`}  
                />
            :
                <img 
                className={imgClass} 
                id={imgId}
                src={`Noimage`}
                alt='Noimage'  
                />
            }
            </>
        );
}

export default ReactImg