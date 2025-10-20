import Link from "next/link"
import menuItems from "./menu-items"
import SingleSubmenuItem from "./single-submenu-item"


const Navbar = () => {
  return (
    <div>

      <div
        className="flex items-center gap-[35px]"
      >
        {menuItems.map((item, index) => {

          if (item.href) {
            return (
              <Link
                key={index}
                href={item.href || "#"}
                className="text-white hover:text-theme-three font-medium"
              >{item.label}</Link>
            )
          }

          if (item.submenu && item.submenu.length > 0) {
            return <SingleSubmenuItem key={index} data={item}/>
          }

        })}
      </div>
    </div>
  )
}

export default Navbar