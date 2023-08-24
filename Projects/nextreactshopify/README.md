### Next React Ecommerce App


- Apps And Sales Channels => Configuration => Storefront API Configuration
    - Unselect: 
        - unauthenticated_write_customers
        - unauthenticated_read_customers
        - unauthenticated_read_content
        - unauthenticated_read_product_listings
        - unauthenticated_read_product_inventory
        - unauthenticated_read_product_tags
        - unauthenticated_write_customers
        - unauthenticated_read_customers
        - unauthenticated_write_checkouts
        - unauthenticated_read_checkouts


##### Packages used

- semantic-ui-react
- semantic-ui-css


##### _.app.js : 

- paste this line in _.app.js
- import 'semantic-ui-css/semantic.min.css'
- component that loads all your pages
- good place to manage the global state
- good place to load all the layouts
- Used a colored button in Semantic-UI