import Link from "next/link";

export const metadata = {
    title: "About Codevolution"
}

export default function About() {
    return (
        <div>
            <Link href="/">Home</Link>
            <h1>About</h1>
            <p>This is the about page of our application.</p>
        </div>
    );
}