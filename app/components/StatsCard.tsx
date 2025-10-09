import { calculateTrendPercentage, cn } from "~/lib/utils"

const StatsCard = ({ headerTitle, total, lastMonthCount, currentMonthCount }: StatsCard) => {

    const { trend, percentage } = calculateTrendPercentage(currentMonthCount, lastMonthCount);

    const isDecrement = trend === "decrement";

    return (

        <article className="stats-card">
            <h2 className="text-base font-medium">{headerTitle}</h2>

            <div className="content">
                <div className="flex flex-col gap-6">
                    <h3 className="text-4xl font-semibold">{total}</h3>
                    <div className="flex items-center gap-2">
                        <figure className="flex items-center gap-1">
                            <img src={`/assets/icons/${isDecrement ? "arrow-down-red.svg" : "arrow-up-green.svg"}`} alt="arrow" className="size-5" />
                            <figcaption className={cn('text-sm font-medium', isDecrement ? 'text-red-500' : 'text-green-700')}>
                                {Math.round(percentage)}%
                            </figcaption>
                        </figure>

                    </div>

                </div>
            </div>
        </article>
    )
}

export default StatsCard