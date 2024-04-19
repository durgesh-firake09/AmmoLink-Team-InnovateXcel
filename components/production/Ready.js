export default function Ready(){
    return(
    <div class="box scrollable">
        <div class="packages-section">
            <h2 class="sticky-header">Ready Queue</h2>
            <div class="order-item">
                <div>
                    <div class="order-details order-name">Package 1</div>
                    <div class="order-details package-info">Weight: 5kg</div>
                    <div class="order-details package-info">Dimensions: 30x20x10 cm</div>
                </div>
                
                <button class="btn" >Ship</button>
            </div>
            <div class="order-item">
                <div>
                    <div class="order-details order-name">Package 2</div>
                    <div class="order-details package-info">Weight: 3kg</div>
                    <div class="order-details package-info">Dimensions: 25x15x8 cm</div>
                </div>
               
                <button class="btn" >Ship</button>
            </div>
            <div class="order-item">
                <div>
                    <div class="order-details order-name">Package 3</div>
                    <div class="order-details package-info">Weight: 2kg</div>
                    <div class="order-details package-info">Dimensions: 20x10x5 cm</div>
                </div>
                <button class="btn" >Ship</button>
            </div>
            
        </div>
    </div>
  
    )
}