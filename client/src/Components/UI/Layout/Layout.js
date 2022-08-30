import Header from "./Header"

const Layout = (props) => {
  return (
    <>
      <Header />
      <main className="">{props.children}</main>
    </>
  )
}

export default Layout;