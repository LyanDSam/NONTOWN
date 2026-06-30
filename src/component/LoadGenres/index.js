import LinkDirect from "../LinkDirect"

const LoadGenres = ({ genresData }) => {
    return (
        <>
            {genresData.map((genre) => (
                <LinkDirect text={genre.name} directTo={`/genre/${genre.id}`} key={genre.id} />
            ))}
        </>
    )
}

export default LoadGenres