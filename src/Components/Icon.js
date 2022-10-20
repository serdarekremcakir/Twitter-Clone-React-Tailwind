import React from 'react'

const Icon = ({ path, circle, className,path2, path3 }) => {
    return (
        <>
            <svg viewBox='0 0 24 24' aria-hidden="true" className={`fill-current ${className}`} >
                <g>
                    {circle ?
                        // 3 dot
                        <>
                            <circle cx="17" cy="12" r="1.5"></circle><circle cx="12" cy="12" r="1.5"></circle><circle cx="7" cy="12" r="1.5"></circle>
                        </>
                        :
                        null}


                    <path d={path}>


                    </path>

                    {
                        path2 ?
                            <path d={path2}>


                            </path> : null
                    }

                    {
                        path3 ?
                            <path d={path3}>


                            </path> : null
                    }


                </g>
            </svg>
        </>

    )
}

export default Icon