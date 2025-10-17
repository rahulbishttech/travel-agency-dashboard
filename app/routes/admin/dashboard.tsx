import { Header, StatsCard, TripCard } from "~/components"
import { user, dashboardStats, allTrips } from "~/constants";

// destructure dashboardStats obj, so u don't have write like this always (dashboardStats.someProp)
const { totalUsers, usersJoined, totalTrips, tripsCreated, userRole } = dashboardStats;

const Dashboard = () => {


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

            <section className="container">
                <h2 className="text-xl font-semibold text-dark-100">Created Trips</h2>

                <div className="trip-grid">
                    {
                        allTrips.slice(0, 4).map(({ id, name, imageUrls, itinerary, tags, travelStyle, estimatedPrice }) => (
                            <TripCard
                                key={id}
                                id={id.toString()}  // doubt - why toString()?    
                                name={name}
                                imageUrl={imageUrls[0]}
                                location={itinerary?.[0]?.location ?? ""}
                                tags={tags}
                                price={estimatedPrice}
                            />
                        ))
                    }
                </div>

            </section>



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