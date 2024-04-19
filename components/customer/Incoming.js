export default function Incoming(){
    return(
        <div class="content">
        <div class="box scrollable">
            <h2 class="sticky-header">Incoming packages</h2>
            <div class="order-item">
                <div>
                    <div class="order-details order-name">Package 1</div>
                    
                    <div class="order-details package-info">Weight: 5kg</div>
                    <div class="order-details package-info">Dimensions: 30x20x10 cm</div>
                </div>
                
                <button class="btn" >Route</button>

            </div>
            <div class="order-item">
                <div>

                    <div class="order-details order-name">Package 2</div>
                    
                    <div class="order-details package-info">Weight: 8kg</div>
                    <div class="order-details package-info">Dimensions: 30x20x10 cm</div>
                </div>
                
                <button class="btn" >Route</button>

            </div>
            <div class="order-item">
                <div>

                    <div class="order-details order-name">Package 3</div>
                    
                    <div class="order-details package-info">Weight: 1kg</div>
                    <div class="order-details package-info">Dimensions: 30x20x10 cm</div>
                </div>
                
                <button class="btn" >Route</button>

            </div>
        </div>
        </div>
    )
}