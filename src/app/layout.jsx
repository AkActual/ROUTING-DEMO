
export default function RootLayout({children}){
    return (
        <html lang="en">
            <body>
                <header
                    style={{
                        backgroundColor: 'blue',
                        color: 'white',
                        padding: '10px',
                        textAlign: 'center'
                    }}
                >
                    header
                </header>
                <main>{children}</main>
                <footer
                    style={{
                        backgroundColor: 'blue',
                        color: 'white',
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