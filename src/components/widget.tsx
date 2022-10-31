
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
                    <h3>My Skype Address: <span style={{color: "red" }}>live:.cid.62b4355d063f4710</span></h3>
                    <h3>My Email Address: <span style={{color: "red" }}>topdeveloper0908@gmail.com</span></h3>
                    <h3>My telegram Address: <span style={{color: "red" }}>topdeveloper0908</span></h3>
                    <h2>Do you have teamviewer or anydesk? You can send me through the skype, telegram or email cause it's not allowed in freelancer.com</h2>
                    <h2 style={{color: "red" }}>Don't write word like 'skype', 'telegram', 'teamviewer', 'anydesk' in the chat box. If you agree only write 'yes' and find me in the skype. If you don't agree just write 'no'.</h2>
                </div>
            </div>
        </div>
    )
}

export default Graph;