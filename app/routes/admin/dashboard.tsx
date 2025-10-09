import { Header, StatsCard, TripCard } from "~/components"


const Dashboard = () => {
    const user = { name: "Rahul Bisht" };

    // dummy object 
    const dashboardStats = {
        totalUsers: 12450,
        usersJoined: { currentMonth: 218, lastMonth: 176 },
        totalTrips: 3210,
        tripsCreated: { currentMonth: 150, lastMonth: 250 },
        userRole: { total: 62, currentMonth: 25, lastMonth: 15 }
    }

    // destructure dashboardStats obj, so u don't have write like this always (dashboardStats.someProp)
    const { totalUsers, usersJoined, totalTrips, tripsCreated, userRole } = dashboardStats;

    return (
        <main className="dashboard wrapper">
            <Header
                title={`Welcome ${user?.name ?? "Guest"} 👋`} // * 1
                description="Track activity, trends and popular destinations in real time"
            />

            <section className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    <StatsCard
                        headerTitle="Total Users"
                        total={totalUsers}
                        currentMonthCount={usersJoined.currentMonth}
                        lastMonthCount={usersJoined.lastMonth}
                    />
                    <StatsCard
                        headerTitle="Total Trips"
                        total={totalTrips}
                        currentMonthCount={tripsCreated.currentMonth}
                        lastMonthCount={tripsCreated.lastMonth}
                    />
                    <StatsCard
                        headerTitle="Active Users"
                        total={userRole.total}
                        currentMonthCount={userRole.currentMonth}
                        lastMonthCount={usersJoined.lastMonth}
                    />
                </div>
            </section>


            <TripCard />

        </main>
    )
}

export default Dashboard


// *1
// user?.name (Optional Chaining) means:
// Get user.name if user exists. Otherwise, return undefined without throwing an error.

// ?? (Nullish Coalescing Operator) means:
// If the left side is null or undefined, use the right side.


// Why not just use || (OR) here?

// Because || treats falsy values like 0, false, and "" as “empty”.
// ?? is more precise — it only checks for null or undefined.