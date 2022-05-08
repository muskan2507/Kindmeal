
import { Banner } from './Banner';
import { FruitDetails } from './FruitDetails';
import { MealDeals, SpecialBannerImg } from './MealDeals';
import { Review } from './review';
function Inner() {
  return (
    <div className="Inner">
     < Banner/>
     < FruitDetails />
     <MealDeals/>
     <SpecialBannerImg/>
     <Review />
    </div>
  );
}

export default Inner;