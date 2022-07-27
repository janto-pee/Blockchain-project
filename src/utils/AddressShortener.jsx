export const shortener = (account) => {
    return (
        <div>
            {` ${account.slice(0,5)}...${account.slice(account.length - 4)} `}
        </div>
    )
}
// simple line that works
// export const shorten = (account) => `${account.slice(0,5)}...${account.slice(account.length - 4)}`