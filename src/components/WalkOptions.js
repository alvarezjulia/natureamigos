export const WalkOptions = ({setCurrentRoute}) => {
    const possibleRoutes = [...Array(16).keys()]

    return (
        <>
            {possibleRoutes.map((e) => (
                <button key={e} onClick={() => setCurrentRoute(e.toString())}>
                    {e.toString()}
                </button>
            ))}
        </>
    )
}