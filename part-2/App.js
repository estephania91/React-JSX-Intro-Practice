function App() {
    return (
        <div>
            <Tweet
                name="Piero Sanchez"
                username="psan31"
                date={new Date().toDateString()}
                message="Netflix's Redeem Team!!!"
            />
            <Tweet
                name="Nats Glez"
                username="natsfranco8"
                date={new Date().toDateString()}
                message="A & J <3"
            />
            <Tweet
                name="Erika Cristina"
                username="erikacgf"
                date={new Date().toDateString()}
                message="Fin de Playa"
            />
        </div>
    );
}