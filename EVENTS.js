function App(){
    const handleMouseMove =()=>{
console.log("Button was clicled!")
    };
    return(
        <div>
            <button onClick={handleMouseMove}>Add animals</button>
        </div>
    );
}