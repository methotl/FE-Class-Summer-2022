//Menu App for Icecream Orders

class Icecream{
    constructor(flavor, size, topping){
        this.flavor = flavor;
        this.size = size;
        this.topping = topping;
    }
    describe(){
        return `${this.flavor} is size ${this.size} with ${this.topping} on top`;
    }
}

//create orders of icecream that can contain multiple individual icecream orders
class Order{
    constructor(name){
        this.name = name;
        this.items = [];
    }
    addItem(icecream){
        //validate the entry
        if (icecream instanceof Icecream){
            this.items.push(icecream);
        }else{
            throw new Error(`Your entry is not an icecream: ${icecream}`);
        }
    }
    describe(){
        return `Order for ${this.name} has ${this.items.length} items to it.`;
    }
}

//create Main Menu
class Menu{
    constructor(){
        this.order = [];
        this.selectedOrder = null;
    }
    //create menu start up
    start(){
        let selection = this.showMenuOptions();
       
        while(selection != 0){
            switch(selection){
                case '1':
                    this.createOrder();
                    break;
                case '2':
                    this.viewOrder();
                    break;
                case '3':
                    this.deleteOrder();
                    break;
                case '4':
                    this.displayOrders();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMenuOptions();
        }
        alert ('Thank You, Have a wonderful day!');
    }
//Create the Main Menu display for user input of Orders

    showMenuOptions(){
        return prompt(`
        1: Create Order
        2: View Order
        3: Cancel Order
        4: View All Orders
        0: Exit
        `)
    }

//How to create an order
    createOrder(){
        let name = prompt(`Please enter a name for the Order: `);
        this.order.push(new Order(name));
    }
//View the Order
    viewOrder(){
        let option = prompt(`Please select the order you wish to view by order number as listed: `) - 1;
        //validate the entry
        if(option > -1 && option < this.order.length){
            this.selectedOrder = this.order[option];
            let OrderDescriptions = `Name for the Order is: ` + this.selectedOrder.name + '\n';

            for (let i = 0; i < this.selectedOrder.items.length; i++) {
                let k = parseInt(i) + 1; //so first item starts is displayed as 1 instead of 0
                OrderDescriptions += k + ':' + this.selectedOrder.items[i].size + ` ` + this.selectedOrder.items[i].flavor + ` with ` + this.selectedOrder.items[i].topping + `\n`;
            }

            let selection = this.OrderMenuOption(OrderDescriptions);
            switch(selection){
                    case '1':
                        this.createIcecream();
                        break;
                    case '2':
                        this.deleteIcecream();
            }
        }
    }
//Delete an Order
    deleteOrder(){
        let option = prompt(`Please enter the number fo the order you wish to delete: `) - 1;
        //validate the entry and delete it
        if(option > -1 && option < this.order.length){
            this.order.splice(option, 1);
        }

    }

//Display the Names for the Orders by creating new string which adds the name field of each order to a line item
    displayOrders(){
        let orderNames = '';
        for(let i = 0; i < this.order.length; i++){
            let k = parseInt(i) + 1;
            orderNames += k + ': ' + this.order[i].name + '\n';
        }
        alert (orderNames);
    }

//Menu display for creating individual icecream orders
    OrderMenuOption(info){
        return prompt(`
            1: Add Icecream Order
            2: Remove Icecream Order
            0: Return

        ${info}
        `);
    }
//Add an individual ice cream order as selected order
    createIcecream(){

        let flavor = prompt(`Please select a flavor of ice cream:
                            Chocolate, Vanilla, Strawberry or Cookie Dough`);
        let size = prompt(`Please enter serving size: 
                            Small, Medium or Large`);
        let topping = prompt(`Please enter a topping you would like on the ice cream: 
                            Jimmies, Nuts, Syrup, Whipped Cream or None`);

        this.selectedOrder.items.push(new Icecream(flavor, size, topping));
    }

//Delete an individual ice cream order, not sure why anyone woudl do that but just in case
    deleteIcecream(){
        let option = prompt('Please enter the number of the order you wish to delete: ') - 1;
        //validate the entry
        if(option > -1 && option < this.selectedOrder.items.length){
            this.selectedOrder.items.splice(option, 1);
        }
    }

}

let menu = new Menu();
menu.start();