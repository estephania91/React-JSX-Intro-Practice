function App() {
    return (
        <div>
            <Person
                name="Dalia"
                age={29}
                hobbies={["ceramics", "hanging out with friends", "baking"]}
            />
            <Person
                name="Daiana"
                age={30}
                hobbies={["singing", "dancing"]}
            />
            <Person
                name="Vivian"
                age={1}
                hobbies={["storytime", "hanging out with mom"]}
            />
            <Person
                name="Nina"
                age={54}
                hobbies={["reading", "home design shows", "coffee with friends"]}
            />
        </div>
    );
}