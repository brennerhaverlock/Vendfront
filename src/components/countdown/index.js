const CountdownClock = ({days, hours, minutes, seconds}) => {
    return (
        <div className="countdown-row">
            <span className="countdown-section">
                <span className="countdown-amount">{days}</span>
                <span className="countdown-period">Days</span>
            </span>
            <span className="countdown-section">
                <span className="countdown-amount">{hours}</span>
                <span className="countdown-period">Hrs</span>
            </span>
            <span className="countdown-section">
                <span className="countdown-amount">{minutes}</span>
                <span className="countdown-period">Min</span>
            </span>
            <span className="countdown-section">
                <span className="countdown-amount" suppressHydrationWarning>{seconds}</span>
                <span className="countdown-period">Sec</span>
            </span>
        </div>
    )
};

export default CountdownClock;