export default function New_order(){
    return(
     
        <div className="box scrollable">
            <h2 className="sticky-header">New Orders</h2>
            <div className="order-item">
                <div>
                    <div className="order-details order-name">Package 1</div>
                   
                    <div className="order-details package-info">Weight: 5kg</div>
                    <div className="order-details package-info">Dimensions: 30x20x10 cm</div>
                </div>
                <button class="btn" >Route</button>

            </div>
            <div className="order-item">
                <div>

                    <div className="order-details order-name">Package 2</div>
                  
                    <div className="order-details package-info">Weight: 8kg</div>
                    <div className="order-details package-info">Dimensions: 30x20x10 cm</div>
                </div>
                
                <button class="btn" >Route</button>

            </div>
            <div className="order-item">
                <div>

                    <div className="order-details order-name">Package 3</div>
                 
                    <div className="order-details package-info">Weight: 1kg</div>
                    <div className="order-details package-info">Dimensions: 30x20x10 cm</div>
                </div>
                
                <button class="btn" >Route</button>

            </div>
        </div>
        
    )
}
