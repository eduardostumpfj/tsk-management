

import DBCategorys from "@/components/molecules/DBCategories"
import DBOverview from "@/components/organism/DBOverview"
import DBStatus from "@/components/organism/DBStatus"
import Timeline from "@/components/organism/Timeline"

export default function Dashboard(){


    return (
        <div className="rounded-normal w-full h-full grid grid-rows-[100px,1fr,1fr] gap-4">
            <DBStatus />
            <div className="grid grid-cols-2 gap-4">
                <DBCategorys />
                <DBOverview />
            </div>

            <Timeline />
        </div>
    )
}