export default function Leftpacakge(){
    return(
        <div className="Content">
        <div className="box scrollable">
        <div className="packages-section">
            <h2 className="sticky-header">Packages left</h2>
            <div className="order-item">
                <div>
                    <div className="order-details order-name">Package 1</div>
                    <div className="order-details package-info">Weight: 5kg</div>
                    <div className="order-details package-info">Dimensions: 30x20x10 cm</div>
                </div>
                
                <button className="btn" >View Details</button>

            </div>
            <div className="order-item">
                <div>
                    <div className="order-details order-name">Package 2</div>
                    <div className="order-details package-info">Weight: 3kg</div>
                    <div className="order-details package-info">Dimensions: 25x15x8 cm</div>
                </div>
                
                <button className="btn" >View Details</button>

            </div>
            <div className="order-item">
                <div>
                    <div className="order-details order-name">Package 3</div>
                    <div className="order-details package-info">Weight: 2kg</div>
                    <div className="order-details package-info">Dimensions: 20x10x5 cm</div>
                </div>
               
                <button className="btn" >View Details</button>

            </div>
            
        </div>
    </div>
    </div>

    )
}