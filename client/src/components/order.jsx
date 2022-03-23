export default function Order() {
    function handleSelectChange(event) {
        console.log(event)
    }
    
    return (
        <select onChange={handleSelectChange}>
            <option value='A to Z'>A to Z</option>
            <option value='Strength'>Strength</option>
        </select>
    )
}
    