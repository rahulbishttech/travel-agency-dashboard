import React from "react";
import { Link, NavLink } from "react-router";
import { sidebarItems } from "~/constants"
import { cn } from "~/lib/utils";

const NavItems = ({ handleClick }: { handleClick?: () => void }) => {

    const user = {
        name: "Rahul",
        email: "realrahulbisht@gmail.com",
        imageUrl: "/assets/images/david.webp"
    }

    return (
        <section className="nav-items">
            <Link to='/' className="link-logo">
                <img src="/assets/icons/logo.svg" alt="logo" className="size-[30px]" />
                <h1>Tourvista</h1>
            </Link>

            <div className="container">
                <nav>
                    {
                        sidebarItems.map(({ id, href, label, icon }) => (
                            <NavLink to={href} key={id}>
                                {
                                    ({ isActive }: { isActive: boolean }) => (
                                        <div className={cn("group nav-item", {  // cn stand for className
                                            'bg-primary-100 !text-white': isActive
                                        })} onClick={handleClick}>
                                            <img src={icon} alt={label} className={`size-5 group-hover:brightness-0 group-hover:invert ${isActive ? 'brightness-0 invert' : 'text-dark-200'}`} />
                                            {label}
                                        </div>
                                    )

                                }
                            </NavLink>
                        )
                        )
                    }
                </nav>

                <footer className="nav-footer">
                    <img src={user?.imageUrl || "assets/image/david.webp"} alt={user?.name || "david"} />

                    <article> {/* when to use article tag in html (*1) check gemini chat (react-dash-expl) */}
                        <h2>{user?.name}</h2>
                        <p>{user?.email}</p>
                    </article>

                    <button onClick={() => { console.log("logout") }} className="cursor-pointer">
                        <img src="/assets/icons/logout.svg" alt="logout" className="size-6" />
                    </button>

                </footer>

            </div>


        </section>
    )
}

export default NavItems