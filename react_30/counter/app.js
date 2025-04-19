function App() {
    const [count, setCount] = React.useState(0);


    function Increment() {
        setCount(count + 1);

    }
    function Reset() {
        setCount(0);
    }

    const headingStyle = {
        color: count === 5 ? 'hsl(16, 92%, 54%)' : 'black'
    };

    const headingText = count === 5 ? 'Limit Reached!' : 'Counter';

    return (
        <>
            <h1 style={headingStyle}>{headingText}</h1>
            <span>{count}</span>
            <div className="btn">
                <button onClick={Increment} disabled={count === 5} aria-label="Increment counter">Increment</button>
                <button onClick={Reset}>Reset</button>
            </div>
        </>
    )
}

const domNode = document.getElementById('app');
const root = ReactDOM.createRoot(domNode);
root.render(<App />);