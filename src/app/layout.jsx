
export default function RootLayout({children}){
    return (
        <html lang="en">
            <body>
                <header
                    style={{
                        backgroundColor: 'lightblue',
                        color: 'white',
                        padding: '10px',
                        textAlign: 'center'
                    }}
                >
                    header
                </header>
                {children}
                <footer
                    style={{
                        backgroundColor: 'ghostwhite',
                        color: 'black',
                        padding: '10px',
                        textAlign: 'center'
                    }}
                >
                    footer
                </footer>
            </body>
        </html>
    )
}