export default function MarketingLayout({
  children,
}:{
  children:React.ReactNode
}){
  return(
    <html lang="en">
      <body>
        {children}
        <footer
          style={{
            backgroundColor:"ghostwhite",
            padding:"1rem"
          }}
        >
          <p>Footer</p>
        </footer>
      </body>
    </html>
  )
}