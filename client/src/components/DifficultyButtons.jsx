import {useExampleContext} from '../context/exampleContext'
export default function DifficultyButtons() {
    const {exampleDispatch} = useExampleContext()
    const handleDifficulty = (e) => {
        exampleDispatch({type:'CHANGE_TYPE',payload:e.target.id})
    }
    return (
        <section className='px-3 py-2'>
                <h2 className='font-semibold text-2xl mb-2'>Tingkat Kesusahan</h2>
                <main className='flex flex-col items-start text-lg mb-1 lg:grid lg:grid-cols-2 2xl:grid-cols-3 gap-x-2 gap-y-1'>
                    <button onClick={handleDifficulty} id='SS' className='bg-green-400 rounded-md px-2 py-1 text-gray-100 tracking-wider mb-1'>Satuan</button>
                    <button onClick={handleDifficulty} id='SP' className='bg-blue-400 rounded-md px-2 py-1 text-gray-100 tracking-wider mb-1'>Satuan + Puluhan</button>
                    <button onClick={handleDifficulty} id='PP' className='bg-yellow-500 rounded-md px-2 py-1 text-gray-100 tracking-wider mb-1'>Puluhan</button>
                    <button onClick={handleDifficulty} id='PR' className='bg-red-400 rounded-md px-2 py-1 text-gray-100 tracking-wider mb-1'>Puluhan + Ratusan</button>
                    <button onClick={handleDifficulty} id='RR' className='bg-purple-400 rounded-md px-2 py-1 text-gray-100 tracking-wider mb-1'>Ratusan</button>
                </main>
        </section>
    )
}
