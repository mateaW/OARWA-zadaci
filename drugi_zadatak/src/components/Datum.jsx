import "../App.css"

function Datum(){
    const trenutniDatum = new Date();

    const dan = trenutniDatum.getDate();
    const mesec = trenutniDatum.getMonth() + 1;
    const godina = trenutniDatum.getFullYear();

    return (
        <div className="datum">
            <p>{dan}/{mesec}/{godina}</p>
        </div>
    )
}

export default Datum