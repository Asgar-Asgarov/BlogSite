import "./sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo voluptas odit excepturi, maxime reiciendis harum necessitatibus dolor, nihil non reprehenderit eos cum vitae? Soluta perspiciatis minus quos atque minima?</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar