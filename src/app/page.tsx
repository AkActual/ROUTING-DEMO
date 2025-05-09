import Link from "next/link";


export default function Home(){
    return (
    <div>
        
        <h1>Welcome Home</h1> 
        <Link href="/about">About</Link>
        <Link href="/register">Register</Link>   
    </div>
    )
}