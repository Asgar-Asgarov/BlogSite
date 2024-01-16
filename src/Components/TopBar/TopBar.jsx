import "./topbar.css"


export const TopBar = () => {
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fa-brands fa-square-facebook"></i>
                <i className="topIcon fa-brands fa-square-instagram"></i>
                <i className="topIcon fa-brands fa-square-pinterest"></i>
                <i className="topIcon fa-brands fa-square-twitter"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>WRITE</li>
                    <li>LOGOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img className="img" src='https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" />
                <i className="searchIcon fa-solid fa-magnifying-glass"></i>
            </div>

        </div>
    )
}
