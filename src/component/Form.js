import React from 'react'

import '../Style-sheets/Form.css'

export default function Form() {
    return (
        <main>
            <form className="form-div-items ">
                <div className='form-div-heading'>
                    <h1 className='form-heading-small'>
                        BE A
                    </h1>
                    <h1 className='form-heading-large'>
                        CAVALOXIAN!
                    </h1>
                </div>

                <div className="form-div-name">
                    <input className='form-input-name input-bg' type="text" name="" id="" placeholder='FIRST NAME' />
                    <input className='form-input-name input-bg' type="text" name="" id="" placeholder='LAST NAME' />
                </div>
                <div className="form-div-email"><input className="form-input-email input-bg" type="email" placeholder='EMAIL' /></div>
                <div className="form-div-code">
                    <select name="code" id="" className='form-select-code input-bg'>
                        <option value="IND">IND</option>
                        <option value="US">CAD</option>
                        <option value="UK">POD</option>
                        <option value="AFG">AFG</option>
                        <option value="RUS">RUS</option>
                        <option value="JAP" >JAP</option>
                    </select>
                    <input type="text" name="" placeholder='+91' className='form-input-code input-bg' />
                </div>
                <div className="form-div-country">
                    <select name="country" className='form-select-country input-bg '>
                        <option value="IND">INDIA</option>
                        <option value="US">CANADA</option>
                        <option value="UK">POLAND</option>
                        <option value="AFG">AFGHANISTAN</option>
                        <option value="RUS">RUSSIA</option>
                        <option value="JAP">JAPAN</option>
                    </select>
                </div>
                <div className="form-div-terms">
                    <input type="checkbox" name="" id="" className='form-radio-terms input-bg' defaultChecked={true} /><span className='form-span-terms'>I AGREE TO THE TERMS &amp; CONDITIONS <a className='form-radio-a-terms'>T&amp;C</a></span>
                </div>
                <div className="form-div-submit">
                    <button type="submit" className='form-buttom-submit'>SUBMIT</button>
                </div>

            </form>
        </main>
    )
}
