import { useState } from "react"

const useInput = (initVal = '') => {
    const [state, setState] = useState(initVal)
    const handleChange = (e) => setState(e.target.value)
    const handleClear = () => setState('')
    return {
        value: state,
        onChange: handleChange,
        clear: handleClear
    }
}

export default useInput