import { useState } from "react"

const useNumberInput = (initVal = '') => {
    const [state, setState] = useState(initVal)
    const handleChange = (e) => {
        const res = e.target.value.replace(/\D/g, '')
        setState(res)
    }
    const handleClear = () => setState('')
    return {
        value: state,
        onChange: handleChange,
        clear: handleClear
    }
}

export default useNumberInput