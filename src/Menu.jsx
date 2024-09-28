import React, { useEffect, useState } from "react";

const Menu = ({ moveMenu, submitApiKey }) => {

    const [outMessage, setOutMessage] = useState('')
    const [messageVisible, setMessageVisible] = useState(false)

    const getAndSubmitKey = async () => {
        let keyResponse
        let textBox = document.getElementById('apikeyinput')
        let textVal = textBox?.value

        textBox.value = ''

        if (textVal) {
            keyResponse = await submitApiKey(textVal)
        }

        if (keyResponse?.success) {
            setOutMessage(keyResponse.message + '.  reloading in 3s...')
            setTimeout(() => window.location.reload(), 3000)
        }
    }

    return (
        <div tabIndex={0} id='menu' className="absolute start-0 top-0 bg-white w-full h-full -translate-x-full shadow-xl md:w-1/2 transition-transform duration-500">
            <svg onClick={() => moveMenu(false)} className="absolute text-gray-600 top-1 right-1 p-0.5 rounded-lg hover:bg-gray-400 h-10 " xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path fill="currentColor" stroke="currentColor" d="M256-213.85 213.85-256l224-224-224-224L256-746.15l224 224 224-224L746.15-704l-224 224 224 224L704-213.85l-224-224-224 224Z" />
            </svg>
            <h2 className="mt-10 ml-3 text-2xl font-semibold">API Key</h2>
            <p className="ml-3 text-sm text-gray-600">In order to use search functionality, add your Google API Key</p>
            <div className="flex bg-gray-300 w-5/6 py-2 px-3 ml-3 mt-2 rounded-lg justify-between">
                <input type="text" autoComplete="off" onFocus={() => { setOutMessage('') }} onKeyDown={e => { if (e.key == 'Enter') { getAndSubmitKey() } }} id="apikeyinput" className="bg-gray-300 grow focus:outline-none focus:ring-transparent" ></input>
                <button onClick={getAndSubmitKey} className="bg-blue-500 ml-3 p-1 px-2 w-20 hover:bg-blue-800 rounded-lg text-white ">Add Key</button>
            </div>
            <p className={`ml-3 mt-2 bg-green-200 px-3 py-2 w-fit rounded-lg ${outMessage ? 'visible' : 'invisible'} text-green-800 text-sm`}>{outMessage}</p>
        </div>
    )
}

export default Menu