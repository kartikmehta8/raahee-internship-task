import Card from "./Card";
import Profile from "./Profile";

function App() {
    return (
        <div className="lg:p-8 md:p-4">
            <div className="grid lg:grid-cols-4 md:grid-cols-1 grid-cols-1 gap-8">
                <div>
                    <Profile />
                </div>
                <div>
                    <Card
                        name="kartikmehta8"
                        location="Ghaziabad, India"
                        date="Wed 26, January 2021"
                    />
                    <br />
                    <Card
                        name="kapilsharma21"
                        location="Punjab, India"
                        date="Wed 26, December 2021"
                    />
                    <br />
                    <Card
                        name="justintrudeau"
                        location="Toronto, Canada"
                        date="Fri 17, November 2021"
                    />
                </div>
                <div>
                    <Card
                        name="sundarpichai17"
                        location="New York, USA"
                        date="Sun 9, May 2021"
                    />
                    <br />
                    <Card
                        name="kimjongun29"
                        location="Sauensung, Korea"
                        date="Wed 1, June 2021"
                    />
                    <br />
                    <Card
                        name="salmankhan6"
                        location="Karnataka, India"
                        date="Tue 6, July 2021"
                    />
                </div>
                <div>
                    <Card
                        name="narendramodi"
                        location="Delhi, India"
                        date="Thu 21, February 2022"
                    />
                    <br />
                    <Card
                        name="mukeshambani"
                        location="Mumbai, India"
                        date="Mon 2, April 2021"
                    />
                    <br />
                    <Card
                        name="kunalmehta202"
                        location="Kashmir, India"
                        date="Fri 1, August 2021"
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
