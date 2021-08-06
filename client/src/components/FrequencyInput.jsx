import { useExampleContext } from '../context/exampleContext'

export default function FrequencyInput() {
    const {exampleDispatch,exampleState} = useExampleContext()
    const handleFrequency = (e) => {
        exampleDispatch({type:'CHANGE_FREQUENCY',payload:e.target.value})
    }
    return (
        <div className='flex flex-col'>
            <h2 className='text-lg font-semibold mb-1'>Frekuensi</h2>
            <input type="range" 
            min='2' max='6' 
            step='2' className='miniInput' 
            value={exampleState.frequency} onChange={handleFrequency}
            />
            <p>{exampleState.frequency}</p>
        </div>
    )
}
