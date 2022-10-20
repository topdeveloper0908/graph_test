
const Graph: React.FC<any> = ({  }) => {
    return (
        <div className="flex items-center justify-center wrapper">
            <div className=" border border-solid p-1 min-w-[640px] min-h-[640px] wrap">
                <div className="flex wrap-header">
                    <h3>Graph Widget</h3>
                    <select className="bg-white p-1 rounded-sm">
                        <option id="1">Last 7 days</option>
                        <option id="1">Last 2 days</option>
                    </select>
                </div>
                <div className="wrap-body flex items-center justify-center min-w-[600px] min-h-[600px] border border-solid">
                    <h3>Graph</h3>
                </div>
            </div>
        </div>
    )
}

export default Graph;