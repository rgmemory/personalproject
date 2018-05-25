select address, bedrooms, firstname 
from listings
    join users
    on users.id = listings.user_id;