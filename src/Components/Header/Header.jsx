import './Header.css'

export const Header = () => {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className="headerTitleSm">React & node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img src="https://images.unsplash.com/photo-1595104105148-ff8cfa0b42b9?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="headerImg" />
    </div>
  )
}
