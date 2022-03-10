import Header from './Header';
import Footer from './Footer';
import Login from './Login';

function Dashboard() {
    let loggedin = false;
    if(loggedin) {
       return  (
        <div>
                <Header />
                <div>
                    <h2>Logged in!</h2>
                </div>
                <Footer />
            </div>
       );
    }
    return (
        <div>
            <Header />
            <Login />
            <Footer />
        </div>
    );
}
export default Dashboard;