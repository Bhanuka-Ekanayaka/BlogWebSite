import { useState } from "react";
import axios from 'axios';

const CreateForm = () => {

    console.log('rerebdering a page');

    const [formData, setFormData] = useState({
        blogTitle: '',
        catergory: 'Novel',
        blogContent: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    console.log('formdata :', formData);

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('');
            console.log('data insert successfully' + response);
        } catch (err) {
            console.log('cannot send a data to the backend' + err);
        }
    }

    return (
        <>
            <div className="CreateBlog">
                <h1 className="blogTitle">Create Your Blog</h1>
                <form>
                    <div className="blogHeader">
                        <div className="labelblogs">
                            <label style={{ padding: '0 5px' }}>Title of the Blog</label>
                            <input type='text' name='blogTitle' style={{ width: '250px' }} onChange={handleChange} />
                        </div>
                        <div className="labelblogs">
                            <label style={{ padding: '0 5px' }}>Catergory</label>
                            <select name='catergory' style={{ width: '100px' }} onChange={handleChange}>
                                <option value='Novel'>Novel</option>
                                <option value='Scientific'>Scientific</option>
                                <option value='Sports'>Sports</option>
                                <option value='Gossips'>Gossips</option>
                            </select>
                        </div>
                    </div><br />
                    <textarea name='blogContent' placeholder="Write Your Blog Here!!!" rows='30' className="blogDetails" onChange={handleChange} /><br />
                    <button type='submit' className="btn-submit" onClick={onSubmit}>Submit</button>
                </form>
            </div>
        </>
    );
}

export default CreateForm;