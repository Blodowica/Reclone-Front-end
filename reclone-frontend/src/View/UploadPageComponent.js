import React from 'react';
import { Link } from 'react-router-dom';

const UploadPage = () => {
    return (
        <div>
            <h1>Upload Page</h1>
            <div>
                <form
                // onSubmit={handleSubmit}
                >
                    <input type="file"
                        //  onChange={handleFileInput} 
                        accept=".png, .jpeg, .mp4, .jpg"
                    />
                    <button type="submit">Upload</button>
                </form>
            </div>
            {/* <Link to={'/testing'}><h1>Testing</h1></Link> */}
        </div>
    )
}
export default UploadPage