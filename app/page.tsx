import Link from "next/link"
const Home=()=>{
  return (
    <div>
      <ul>
        <li><Link href="/home" target="blank">home</Link></li>
        <li><Link href="/about" target="blank">about</Link></li>
        <li><Link href="/bilal" target="blank">bilal</Link></li>
        

      </ul>
      <h1>this is my first page</h1>
    </div>
  )
}
export default Home