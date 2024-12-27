
import { ResponsivePie } from "@nivo/pie";


export default function DonutChart({data}){
    return (
            <ResponsivePie
                data={data}
                margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                //activeOuterRadiusOffset={0} // No hover effect
                tooltip={() => null} // Disable tooltips entirely
                enableArcLinkLabels={false} // Remove arc link labels
                enableArcLabels={false}     // Remove arc labels (alternative)
                colors={['#7DFF9C','#BF98F2', '#FF8D7D' ]}
                innerRadius={.7}
                padAngle={2}
                cornerRadius={3}
                activeOuterRadiusOffset={0}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines1',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    },
                    {
                        id: 'lines2',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        rotation: 45,
                        lineWidth: 6,
                        spacing: 10
                    },
                ]}
                fill={[
                    {
                        match: {
                            id: 'col1'
                        },
                        id: 'lines1'
                    },
                    {
                        match: {
                            id: 'col2'
                        },
                        id: 'lines2'
                    },
                ]}
                
            />
    )
}