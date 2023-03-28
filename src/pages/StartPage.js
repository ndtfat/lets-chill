import { Link } from 'react-router-dom';

function StartPage() {
    return (
        <>
            <h1>Thís is start page</h1>
            <button>
                <Link to="/main">Lets chill</Link>
            </button>
        </>
    );
}

export default StartPage;
