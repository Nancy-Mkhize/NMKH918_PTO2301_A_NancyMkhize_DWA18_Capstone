const FavouritesCards = (props) => {
  const { data } = props;
  const created = new Date(data.created)

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const readeableDate = `
  ${created.getDate()} ${months[created.getMonth()]} ${created.getFullYear()}
  `;

  return (
    <>
    <h1>{data.title}</h1>
    <h1>Added: {readeableDate}</h1>
    <h1>Episode: {data.episode}</h1>
    <h1>Season: {data.season}</h1>
  </>
  )
}

export default FavouritesCards