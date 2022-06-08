import React from 'react'

const CategoryDetails = () => {
    useEffect(() => {
        document.title = "Techno - Category Details"
    }, [])
    return (
        <div>
            <div className='afterHeader'>
                <div className='container'>
                    <div className='row mt-5'>
                        <label className='AuthorsTitle'>Books of Category Name</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryDetails