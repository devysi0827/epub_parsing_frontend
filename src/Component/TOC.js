import React from 'react'

function TOC() {

        const {
            TOCList
        } = props;
    
        return (
            <>
            {TOCList.map((page,index) =>
            <button key= {index} onClick={(e) => WantPageInfo(page)}> 
              {page}
            </button>
        )}
            </>
        );
}

export default TOC