import React from 'react'

const Sns = (props) => {
    return (
        <div className='m-2'>
            <span className='text-bluegray800 fw-bolder text-uppercase me-2' >{props.group}</span>
            {
                props.items.map((item, key) => (
                    <a href='/' target='_black' rel='noopener noreferrer' aria-label={item.label}
                        className='link-bluegray800 me-1' key={key}>
                        {item.icon}
                    </a>
                ))
            }
        </div>
    )
}

export default Sns