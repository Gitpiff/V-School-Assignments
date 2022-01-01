export default function App() {
    const [ name, setName ] = useState({
            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            phone: "",
            favFood: "",
            aboutUser: "",
            newBadge:[]
    })


    handleChange(e) {
        setName({
            [name] : value
        })
    }


    handleSubmit(e) {
        e.preventDefault()
        setName(() => {
            return {
                newBadge: [newBadge, {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    phone: phone,
                    placeOfBirth: placeOfBirth,
                    favFood: favFood,
                    aboutUser: aboutUser
                }]
            }
        })
    }


    return (

        <div>
            <h1 className="title">Name Badge</h1>
            <form onSubmit={handleSubmit}>

                <input type="text"
                placeholder="First Name"
                name="firstName"
                value={firstName}
                onChange={handleChange}/>

                <input type="text"
                placeholder="Last Name"
                name="lastName"
                value={lastName}
                onChange={handleChange}/>

                <input type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleChange}/>

                <input type="text"
                placeholder="Place of Birth"
                name="placeOfBirth"
                value={placeOfBirth}
                onChange={handleChange}/>

                <input type="tel"
                placeholder="Phone"
                name="phone"
                value={phone}
                onChange={handleChange}/>

                <input type="text"
                placeholder="Favorite Food"
                name="favFood"
                value={favFood}
                onChange={handleChange}/>

                <textarea className="about"
                placeholder="Tell us about yourself"
                name="aboutUser"
                value={aboutUser}
                onChange={handleChange}></textarea>

                <button>Submit</button>
            </form>

            {newUser}


        </div>


    )





}
