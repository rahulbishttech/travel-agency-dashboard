import React from "react";
import { Header } from "~/components";

const AllUsers = () => {
    const user = { name: "Rahul Bisht" };

    return (
        <main className="dashboard wrapper">
            <Header
                title={`Welcome ${user?.name ?? "Guest"} 👋`} // * 1
                description="Track activity, trends and popular destinations in real time"
            />
            dashboard page content
        </main>
    )
}

export default AllUsers;