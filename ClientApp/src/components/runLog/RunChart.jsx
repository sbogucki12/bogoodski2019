import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
class RunChart extends React.Component {
    render() {

        const data = [
            { date: 'May 1', time: Number((19 * 60 + (.01 * 60)) / 60).toFixed(2), distance: 3, get pace() { return Number(this.time / this.distance).toFixed(2) } },
            { date: 'May 2', time: Number((18 * 60 + (.22 * 60)) / 60).toFixed(2), distance: 3, get pace() { return Number(this.time / this.distance).toFixed(2) } },
            { date: 'May 3', time: Number((20 * 60 + (.41 * 60)) / 60).toFixed(2), distance: 3, get pace() { return Number(this.time / this.distance).toFixed(2) } }
        ];

        const CustomTooltip = ({ active, payload, label }) => {
            if (active) {
                return (
                    <div className="custom-tooltip">
                        <p className="label">{`${label} : ${payload[0].value}`}</p>   
                        <p className="desc">{`pace: ${payload[0].payload.pace}`}</p>                        
                    </div>
                );
            }
            return null;
        };
        
        const renderLineChart = (
            <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }} style={{ marginTop: '25vh' }}>
                <Line type="monotone" dataKey="time" stroke="#8884d8"  />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="date"  />
                <YAxis allowDecimals={true} tickCount={3} domain={[15, 21]} />
                <Tooltip content={<CustomTooltip />}/>
            </LineChart>
        )

        return(
          <div>
                {renderLineChart}            
          </div>
        )
      }
}
export default RunChart;