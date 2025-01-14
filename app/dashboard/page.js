

import DBCategorys from "@/components/molecules/DBCategories"
import DBOverview from "@/components/organism/DBOverview"
import DBStatus from "@/components/organism/DBStatus"
import Timeline from "@/components/organism/Timeline"

export default function Dashboard(){


    return (
        <div className="rounded-normal w-full h-full grid grid-rows-[repeat(4,max-content)] gap-4
                        md:grid-rows-[100px,1fr,1fr]
        ">
            <DBStatus />
            <div className="grid grid-cols-1 gap-4 h-full
                            md:grid-cols-2
            ">
                <DBCategorys />
                <DBOverview />
            </div>

            <Timeline />
        </div>
    )
}